import { AppBar, Button, Container, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import Cart from './Cart';
import { useAuth } from '../context/auth-context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Header = () => {
    const { userLogged, logout, login } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token')
        if (isAuthenticated) {
            login(isAuthenticated);
        }
    }, [login]);

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Tienda deportiva Pechoius
                    </Typography>
                    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={() => { navigate('/') }} color='inherit' aria-label='Home' variant='contained' sx={{ justifyContent: 'space-between', mx: 1, backgroundColor: 'green' }}>
                            <Typography variant="body1" >
                                Home
                            </Typography>
                        </Button>
                        <Button onClick={() => { navigate('/faq') }} color='inherit' aria-label='FAQs' variant='contained' sx={{ justifyContent: 'space-between', mx: 1, backgroundColor: 'green' }}>
                            <Typography variant="body1">
                                FAQs
                            </Typography>
                        </Button>
                        <Button onClick={() => { navigate('/contact') }} color='inherit' aria-label='Contact' variant='contained' sx={{ justifyContent: 'space-between', mx: 1, backgroundColor: 'green' }}>
                            <Typography variant="body1">
                                Contacto
                            </Typography>
                        </Button>
                        {userLogged && (
                            <Button onClick={() => { navigate('/panel') }} color='inherit' aria-label='Panel' variant='contained' sx={{ justifyContent: 'space-between', mx: 1, backgroundColor: 'green' }}>
                                <Typography variant="body1">
                                    Panel
                                </Typography>
                            </Button>
                        )}
                        <Cart />
                    </Container>
                    {userLogged ? (
                        <Button color='inherit' variant='contained' sx={{ backgroundColor: 'red' }} onClick={handleLogout}>
                            <Typography variant="body1">Logout</Typography>
                        </Button>
                    ) : (
                        <Button onClick={() => { navigate('/login') }} color='inherit' aria-label='Login' variant='contained' sx={{ justifyContent: 'space-between', backgroundColor: 'green' }}>
                            <Typography variant="body1">Login</Typography>
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
            <Divider style={{ marginBottom: 20 }}></Divider>
        </div>
    );
};


export default Header;