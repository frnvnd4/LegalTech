import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

export default function TicketForm() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    user_id: '',
    chat_id: '',
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId') || 'default_user'; // Simulación de user_id
    const chatId = `user_${Math.floor(Math.random() * 1000)}`; // Genera un chat_id
    setForm((prevForm) => ({
      ...prevForm,
      user_id: userId,
      chat_id: chatId,
    }));
    console.log('ID del chat', chatId )
    console.log('form:', form)
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.title || !form.description) {
      setValidationErrors({
        title: !form.title ? 'El título es obligatorio' : undefined,
        description: !form.description ? 'La descripción es obligatoria' : undefined,
      });
      return;
    }

    try {
      const token = localStorage.getItem('authToken'); // Token JWT
      
      const response = await fetch('http://localhost:3000/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
        
      if (!response.ok) {
        throw new Error('Error al generar el ticket');
      }

      const data = await response.json();
      console.log('Ticket generado exitosamente:', data);

      // Limpia el formulario y muestra el popup
      setForm({
        title: '',
        description: '',
        user_id: form.user_id,
        chat_id: form.chat_id,
      });
      setPopupOpen(true);
    } catch (error) {
      console.error('Error al generar el ticket:', error);
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          mt: 10,
          mb: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 3,
          p: 6,
          border: '4px solid #4e73ca',
          boxShadow: '1px 1px 15px 5px rgba(78, 115, 202, 1)',
          color: '#FFFFFF',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', mb: 2 }}>
          <AssignmentIcon />
        </Avatar>
        <Typography color="secondary" component="h1" variant="h5" sx={{ mb: 2 }}>
          Generar Ticket
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, color: '#FFFFFF' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                color="secondary"
                onChange={handleChange}
                name="title"
                required
                fullWidth
                label="Título"
                value={form.title}
                placeholder="Ingrese el asunto de su ticket"
                error={!!validationErrors.title}
                helperText={validationErrors.title || ' '}
                focused
                sx={{
                  '& .MuiInputBase-input': {
                    color: '#FFFFFF',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#aa7de3',
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#FFFFFF',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="secondary"
                onChange={handleChange}
                name="description"
                required
                fullWidth
                multiline
                rows={4}
                label="Descripción"
                value={form.description}
                placeholder="Explique el problema con más detalle"
                error={!!validationErrors.description}
                helperText={validationErrors.description || ' '}
                focused
                sx={{
                  '& .MuiInputBase-input': {
                    color: '#FFFFFF',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#aa7de3',
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#FFFFFF',
                  },
                }}
              />
            </Grid>
          </Grid>
          <Button
            color="secondary"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar Ticket
          </Button>
        </Box>
      </Box>
      <Dialog open={popupOpen} onClose={handleClosePopup}>
        <DialogTitle>Ticket generado</DialogTitle>
        <DialogContent>
          ¡El ticket se ha generado exitosamente! El estado se podrá verificar en Cuenta/Mis tickets.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
