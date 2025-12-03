import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  // Estado inicial del formulario
  const initialForm = {
    rut: '',
    name: '',
    email: '',
    password: '',
    role: 'user', // Valor predeterminado
  };

  const [form, setForm] = useState(initialForm);

  // Validación de campos
  const validateField = (fieldName, value) => {
    let isValid = true;

    if (fieldName === 'rut') {
      const rutRegex = /^[0-9]+-[0-9kK]{1}$/; // Validar formato del RUT
      isValid = rutRegex.test(value);
    } else if (fieldName === 'name') {
      const nameRegex = /^[A-Za-zÁ-ÿ\s]+$/; // Solo letras y espacios
      isValid = nameRegex.test(value);
    } else if (fieldName === 'email') {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // Validación de email
      isValid = emailRegex.test(value);
    } else if (fieldName === 'password') {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // Al menos una mayúscula, una minúscula, y un número
      isValid = passwordRegex.test(value);
    }

    setValidationErrors((prevState) => ({
      ...prevState,
      [fieldName]: isValid ? undefined : 'Campo inválido',
    }));
  };

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validateField(name, value);
    
  };

  // Manejo del envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/auth/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form), // El objeto incluye `role: 'user'`
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        navigate('/login');
      } else {
        setValidationErrors((prevState) => ({
          ...prevState,
          apiError: data.message || 'Error al registrarse.',
        }));
        
      }
    } catch (error) {
      setValidationErrors((prevState) => ({
        ...prevState,
        apiError: 'Error al conectar con el servidor.',
      }));
    }
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
          color: '#FFFF',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', mb: 2 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography color="secondary" component="h1" variant="h5" sx={{ mb: 2 }}>
          Crea tu cuenta
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                color="secondary"
                onChange={handleChange}
                name="rut"
                required
                fullWidth
                label="RUT"
                value={form.rut}
                placeholder="12345678-9"
                error={validationErrors.rut !== undefined}
                helperText={validationErrors.rut || ' '}
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                  },
                  '& .MuiFormHelperText-root': {
                    color: 'white',
                  },
                }}
                focused
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="secondary"
                onChange={handleChange}
                name="name"
                required
                fullWidth
                label="Nombre"
                value={form.name}
                placeholder="Juan Pérez"
                error={validationErrors.name !== undefined}
                helperText={validationErrors.name || ' '}
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                  },
                  '& .MuiFormHelperText-root': {
                    color: 'white',
                  },
                }}
                focused
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="secondary"
                onChange={handleChange}
                name="email"
                required
                fullWidth
                label="Correo Electrónico"
                value={form.email}
                placeholder="ejemplo@gmail.com"
                error={validationErrors.email !== undefined}
                helperText={validationErrors.email || ' '}
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                  },
                  '& .MuiFormHelperText-root': {
                    color: 'white',
                  },
                }}
                focused
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="secondary"
                onChange={handleChange}
                name="password"
                required
                fullWidth
                type="password"
                label="Contraseña"
                value={form.password}
                placeholder="********"
                error={validationErrors.password !== undefined}
                helperText={
                  validationErrors.password ||
                  'Mín. 8 caracteres (Debe contener al menos 1 mayúscula, 1 minúscula y 1 número)'
                }
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                  },
                  '& .MuiFormHelperText-root': {
                    color: 'white',
                  },
                }}
                focused
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            Registrarse
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button component={NavLink} to="/login" sx={{ textDecoration: 'underline', color: 'white' }}>
                ¿Ya tienes una cuenta? Inicia sesión
              </Button>
            </Grid>
          </Grid>
          {validationErrors.apiError && (
            <Typography color="error" align="center" sx={{ mt: 2 }}>
              {validationErrors.apiError}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}
