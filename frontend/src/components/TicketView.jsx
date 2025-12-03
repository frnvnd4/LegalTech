import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, Grid, Button, Card, CardContent } from '@mui/material';

const ticketsMock = [
  { id: 1, title: 'Problema con login', status: 'Abierto'},
  { id: 2, title: 'Consulta legal sobre contratos', status: 'En Proceso'},
  { id: 3, title: 'Error en plataforma', status: 'Cerrado'},
  { id: 4, title: 'Revisión de caso laboral', status: 'Abierto'},
];

function ViewTickets() {
  const [filter, setFilter] = useState('Todos');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTickets =
    filter === 'Todos' ? ticketsMock : ticketsMock.filter((ticket) => ticket.status === filter);

  return (
    <Box
    sx={{mb:3}}
    >
      <Typography variant="h4" sx={{ mb: 3, color: 'white' }}>
        Mis Tickets
      </Typography>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Select
          value={filter}
          onChange={handleFilterChange}
          sx={{
            minWidth: 150,
            color: '#ffffff',
            '.MuiOutlinedInput-notchedOutline': { borderColor: '#4e73ca' },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#4e73ca' },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#4e73ca' },
            '.MuiSvgIcon-root': { color: '#ffffff' },
          }}
        >
          <MenuItem value="Todos">Todos</MenuItem>
          <MenuItem value="Abierto">Abierto</MenuItem>
          <MenuItem value="En Proceso">En Proceso</MenuItem>
          <MenuItem value="Cerrado">Cerrado</MenuItem>
        </Select>
      </Box>
      <Grid container spacing={3}>
        {filteredTickets.map((ticket) => (
          <Grid item xs={12} md={6} key={ticket.id}>
            <Card
              sx={{
                borderRadius: 2,
                p: 2,
                border: '4px solid #4e73ca',
                bgcolor: '#1A1A2E',
                color: 'white',
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }} color='white'>
                  {ticket.title}
                </Typography>
                <Typography variant="body2" color='white'>Estado: {ticket.status}</Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: 'white',
                      borderColor: 'white',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    Ver Detalles
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ViewTickets;
