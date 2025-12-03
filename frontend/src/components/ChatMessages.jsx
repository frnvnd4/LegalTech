import React, { useState, useRef } from 'react';
import { Box, TextField, List, ListItem, ListItemText, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

function ChatMessages({ messages, input, setInput, sendMessage }) {
    const [likedMessages, setLikedMessages] = useState({});
    const [openDialog, setOpenDialog] = useState(false);
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const toggleLike = (index) => {
        setLikedMessages((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <Box
            sx={{
                borderRadius: 2,
                p: 2,
                maxWidth: { xs: '100%', md: '60%' },
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: { xs: '65vh', md: '70vh' },
                border: '4px solid #4e73ca',
                boxShadow: '1px 1px 30px 5px rgba(78, 115, 202, 1)',
                mt: { xs: 2, md: 0 },
            }}
        >
            <List sx={{ flexGrow: 1, overflow: 'auto' }}>
                {messages.map((msg, index) => (
                    <ListItem key={index} sx={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                        <Box
                            sx={{
                                p: 2,
                                borderRadius: 2,
                                bgcolor: msg.sender === 'user' ? 'primary.main' : 'secondary.main',
                                color: 'white',
                                maxWidth: { xs: '100%', md: '70%' },
                                position: 'relative',
                            }}
                        >
                            <ListItemText primary={msg.text} />
                            {msg.sender !== 'user' && (
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                                    <IconButton
                                        color="inherit"
                                        onClick={() => toggleLike(index)}
                                    >
                                        {likedMessages[index] ? (
                                            <ThumbUpIcon />
                                        ) : (
                                            <ThumbUpOffAltIcon />
                                        )}
                                    </IconButton>
                                    <IconButton color="inherit" onClick={handleOpenDialog}>
                                        <ThumbDownOffAltIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </Box>
                    </ListItem>
                ))}
                <div ref={messagesEndRef} />
            </List>
            <Box sx={{ display: 'flex', alignItems: 'center', borderTop: '2px solid #4e73ca', pt: 2 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            sendMessage();
                        }
                    }}
                    InputProps={{
                        endAdornment: (
                            <IconButton color="primary" onClick={sendMessage}>
                                <SendIcon />
                            </IconButton>
                        ),
                    }}
                    sx={{
                        input: {
                            color: '#ffffff',
                        },
                    }}
                    focused
                />
            </Box>
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                PaperProps={{
                    sx: {
                        bgcolor: '#5283f7',
                        color: 'white',
                        borderRadius: 5,
                        p: 1,
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(5px)', // Agrega desenfoque de fondo
                        border: '5px solid #ffffff33', // Borde translúcido
                        animation: 'fadeIn 0.3s ease-in-out',
                    },
                }}
                sx={{
                    '@keyframes fadeIn': {
                        '0%': { opacity: 0, transform: 'scale(0.9)' },
                        '100%': { opacity: 1, transform: 'scale(1)' },
                    },
                }}
            >
                <DialogContent>
                    <DialogContentText sx={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '500' }}>
                        Lamentamos que no le haya gustado la respuesta. ¿Desea generar un ticket para comunicarse con un abogado especialista?
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', color:'#FFFFFF'}}>
                    <Button onClick={handleCloseDialog} sx={{color: 'white', fontWeight: 'bold', border: '1px solid #FFFFFF', borderRadius: 2, px: 3, '&:hover': { bgcolor: '#ffffff33' } }}>
                        Cancelar
                    </Button>
                    <Button onClick={() => navigate('/createTicket')} sx={{ color: 'white', fontWeight: 'bold', border: '1px solid #FFFFFF', borderRadius: 2, px: 3, '&:hover': { bgcolor: '#ffffff33' } }}>
                        Generar Ticket
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default ChatMessages;
