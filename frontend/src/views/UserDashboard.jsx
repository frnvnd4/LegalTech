import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';

function UserDashboard() {
  return (
    <Box sx={{ padding: 4, minHeight: '100vh' }}>
      {/* Header */}
      <Typography variant="h3" sx={{ fontWeight: 'bold'}}>
        Hola, FELIPE
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: 4 }}>
        Welcome to your dashboard! Here you can track your tokens, manage your creations, and explore new features.
      </Typography>

      <Grid container spacing={3}>
        {/* Historic Section */}
        <Grid item xs={12} md={12}>
          <Card sx={{ backgroundColor: '#1A1A2E', color:'#FFFF', border: '4px solid #4e73ca',
                boxShadow: '1px 1px 30px 5px rgba(78, 115, 202, 1)'}}>
            <CardContent sx={{p:4}}>
            <Box display="flex" justifyContent="space-between" alignItems='center' mb={4} >
                <Typography variant="h6" sx={{ fontWeight: 'bold'}}>Información Personal</Typography>
                <Button variant='text' sx={{maxWidth: '25vw', color:'secondary.main'}}>Editar</Button>
                </Box>
              <Box mt={2}>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Nombres</Typography>
                  <Typography>Felipe Nicolás</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Apellidos</Typography>
                  <Typography>Gutiérrez Lazo</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Dirección</Typography>
                  <Typography>Río Ebro 12235</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Región</Typography>
                  <Typography>Metropolitana</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Celular</Typography>
                  <Typography>+56 9 49332456</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Correo Electrónico</Typography>
                  <Typography>felipe@gmail.com</Typography>
                </Box>
                {/* Add more items as needed */}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Tokens Status Section */}
        <Grid item xs={12} md={12}>
        <Card sx={{ backgroundColor: '#1A1A2E', color:'#FFFF', border: '4px solid #4e73ca',
                boxShadow: '1px 1px 30px 5px rgba(78, 115, 202, 1)'}}>
            <CardContent sx={{p:4}}>
              {/* <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Asesoría Personalizada</Typography> */}
              <Box display="flex" justifyContent="space-between" alignItems='center' mb={4} >
                <Typography variant="h6" sx={{ fontWeight: 'bold'}}>Asesoría Personalizada</Typography>
                <Button variant='text' sx={{maxWidth: '25vw', color:'secondary.main'}}>Ver detalles</Button>
                </Box>
              <Box display="flex" justifyContent="space-around" mt={2}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color:'primary.main'}}>5</Typography>
                  <Typography>Tickets</Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color:''}}>3</Typography>
                  <Typography>En espera</Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold'}}>2</Typography>
                  <Typography>En proceso</Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color:'lightgreen'}}>0</Typography>
                  <Typography>Resueltos</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Subscription Section */}
        <Grid item xs={12} md={12}>
        <Card sx={{ backgroundColor: '#1A1A2E', color:'#FFFF', border: '4px solid #4e73ca',
                boxShadow: '1px 1px 30px 5px rgba(78, 115, 202, 1)'}}>
            <CardContent sx={{p:4}}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb:2 }}>Your Subscription</Typography>
              <Box mt={2}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>LOVELY PET</Typography>
                <Typography>Next Payment</Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold'}}>12/2024</Typography>
                <Button variant="contained" sx={{ marginTop: 2}}>
                  Upgrade plan
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserDashboard;
