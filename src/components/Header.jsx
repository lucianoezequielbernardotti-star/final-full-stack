import { AppBar, Button, Container, Divider, IconButton, Toolbar, Typography, Link} from '@mui/material';
import Cart from './Cart';


const Header = () => {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Tienda deportiva Pechoius
                    </Typography>
                    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to="/" color='inherit'>
                                    <Button onClick={() => {window.location.href ='/'}} color='inherit' aria-label='Home' variant='contained' sx={{ justifyContent: 'space-between', mx: 1, backgroundColor: 'green' }}>
                                        <Typography variant="body1" >
                                            Home
                                        </Typography>
                                    </Button>
                                </Link>
                                <Link to="/faq" color='inherit'>
                                    <Button onClick={() => {window.location.href = '/faq'}} color='inherit' aria-label='Terms' variant='contained' sx={{ justifyContent: 'space-between', mx: 1, backgroundColor: 'green' }}>
                                        <Typography variant="body1">
                                            Terminos
                                        </Typography>
                                    </Button>
                                </Link>
                                <Link to="/contact" color='inherit'>
                                    <Button onClick={() => {window.location.href = '/contact'}} color='inherit' aria-label='Contact' variant='contained' sx={{ justifyContent: 'space-between', mx: 1, backgroundColor: 'green' }}>
                                        <Typography variant="body1">
                                            Contacto
                                        </Typography>
                                    </Button>
                                </Link>
                                <Cart />
                    </Container>
                    <IconButton onClick={() => {window.location.href = '/panel'}} color='inherit' aria-label='Admin Access'>
                        <Typography variant="body1" sx={{ pr: 1 }}>
                            Admin
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Divider style={{ marginBottom: 20 }}></Divider>
        </div>
    );
};


export default Header;