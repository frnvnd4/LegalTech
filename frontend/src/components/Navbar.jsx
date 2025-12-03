// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Box, IconButton, Menu, MenuItem } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// function Navbar() {
//     const [anchorEl, setAnchorEl] = useState(null);

//     const handleMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <AppBar position="static" color="transparent" elevation={0} sx={{ backgroundColor: '#1A1A2E', color: '#FFFF' }}>
//             <Toolbar>
//                 <Box sx={{ flexGrow: 1 }}>
//                     <Typography
//                         color="inherit"
//                         variant="h6"
//                         component={NavLink}
//                         sx={{
//                             textDecoration: 'none',
//                             fontWeight: 700,
//                         }}
//                         to="/"
//                     >
//                         LegalTech
//                     </Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
//                     <Button color="inherit" component={NavLink} to="/login">
//                         Ingresar
//                     </Button>
//                     <Button color="primary" variant="contained" component={NavLink} to="/register">
//                         Registrarse
//                     </Button>
//                     <IconButton
//                         color="inherit"
//                         onClick={handleMenuOpen}
//                         aria-controls="user-menu"
//                         aria-haspopup="true"
//                     >
//                         <AccountCircleIcon />
//                     </IconButton>
//                     {/* Acá debe haber un if que pregunte si hay un usuario logeado */}
//                     <Menu
//                         id="user-menu"
//                         anchorEl={anchorEl}
//                         open={Boolean(anchorEl)}
//                         onClose={handleMenuClose}
//                         sx={{
//                             '& .MuiPaper-root': {
//                                 backgroundColor: '#5283f7', // Cambia este color según tus preferencias
//                                 color: '#ffffff', // Cambia el color del texto si es necesario
//                             }
//                         }}
//                     >
//                         <MenuItem onClick={handleMenuClose} component={NavLink} to="/tickets">
//                             Ver Tickets
//                         </MenuItem>
//                         <MenuItem onClick={handleMenuClose} component={NavLink} to="/logout">
//                             Cerrar Sesión
//                         </MenuItem>
//                     </Menu>
//                 </Box>
//             </Toolbar>
//         </AppBar>
//     );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Verificar si el token existe al montar el componente
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token); // Si hay token, el usuario está autenticado
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Eliminar el token y actualizar el estado de autenticación
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        handleMenuClose();
        window.location.href = '/'; // Redirigir a la página de inicio
    };

    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ backgroundColor: '#1A1A2E', color: '#FFFF' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        color="inherit"
                        variant="h6"
                        component={NavLink}
                        sx={{
                            textDecoration: 'none',
                            fontWeight: 700,
                        }}
                        to="/"
                    >
                        LegalTech
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    {!isAuthenticated ? (
                        <>
                            <Button color="inherit" component={NavLink} to="/login">
                                Ingresar
                            </Button>
                            <Button color="primary" variant="contained" component={NavLink} to="/register">
                                Registrarse
                            </Button>
                        </>
                    ) : (
                        <>
                            <IconButton
                                color="inherit"
                                onClick={handleMenuOpen}
                                aria-controls="user-menu"
                                aria-haspopup="true"
                            >
                                <AccountCircleIcon />
                            </IconButton>
                            <Menu
                                id="user-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                sx={{
                                    '& .MuiPaper-root': {
                                        backgroundColor: '#5283f7',
                                        color: '#ffffff',
                                    },
                                }}
                            >
                                <MenuItem onClick={handleMenuClose} component={NavLink} to="/tickets">
                                    Ver Tickets
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    Cerrar Sesión
                                </MenuItem>
                            </Menu>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
