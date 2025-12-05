import { useState } from "react";
import { useCart } from "../context/cart-context";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from "@mui/icons-material/Delete";
import { Snackbar, Alert } from "@mui/material";
import emailjs from 'emailjs-com';
import { IconButton, Badge, Popover, Paper, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from "@mui/material";

const Cart = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { cart: Cart, removeFromCart, clearCart } = useCart();
    const calculateTotalPrice = (cartItems) => {
        return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    }
    const total = calculateTotalPrice(Cart);
    const handleCartClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleCartClose = () => {
        setAnchorEl(null);
    }
    const handleRemoveItem = (item) => {
        removeFromCart(item);
    }
    const [notif, setNotif] = useState(false);

    const resetCart = () => {
        if (typeof clearCart === 'function') {
            clearCart();
        }
    }

    const handleCheckOut = (e) => {
        let cartStr = '';
        Cart.forEach((item) => {
            cartStr += `Producto: ${item.product.name}, Cantidad: ${item.quantity}, Precio unitario: $${item.product.price}\n`;
        });
        const templateParams = {
            cartStr: cartStr,
            total_price: total,
            subject: 'Nueva compra realizada',
            to_email: 'lucianoezequielbernardotti@mail.com'
        };
        emailjs.send('service_yv06b7q', 'template_5fezqfy', templateParams, 'xjwm773xkdE6jFpLA')
            .then((result) => {
                console.log(result.text);
                if (result.text === 'OK') {
                    setNotif(true);
                    resetCart();
                    handleCartClose();
                }
            }, (error) => {
                console.log(error.text);
                alert('Error al procesar la compra, por favor intenta de nuevo.');
            });
    }
return (
    <div>
        <Badge badgeContent={Cart.length} color="secondary">
            <IconButton color="inherit" aria-label="shopping-cart" onClick={handleCartClick}>
                <ShoppingCartIcon />
            </IconButton>
        </Badge>
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleCartClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}>
            <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Carrito de Compras</Typography>
                {Cart.length > 0 ? (
                    <>
                        <List>
                            {Cart.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemAvatar>
                                        <Avatar alt="Product Image" src={item.product.image} />
                                    </ListItemAvatar>
                                    <ListItemText primary={`${item.product.name} (Cant.: ${item.quantity})`} secondary={
                                        <IconButton
                                            color="error"
                                            aria-label="delete"
                                            onClick={() => handleRemoveItem(item)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    } />
                                </ListItem>
                            ))}
                        </List>
                        <Typography variant="h6" sx={{ textAlign: 'right' }}>
                            Total Carrito: ${total.toFixed(2)}
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" color="primary" onClick={handleCheckOut}>
                                Finalizar Compra
                            </Button>
                        </div>
                    </>
                ) : (
                    <Typography variant="body2" sx={{ p: 2 }}>
                        El carrito está vacío
                    </Typography>
                )}
            </Paper>
        </Popover>
        <Snackbar open={notif} autoHideDuration={6000} onClose={() => setNotif(false)}>
        <Alert
            onClose={() => setNotif(false)}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
        >
            Compra finalizada con éxito!
        </Alert>
    </Snackbar>
    </div>
);
}

export default Cart;