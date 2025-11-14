import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { IconButton, Tooltip } from '@mui/material';
import { useCart } from '../context/cart-context';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Feed(props) {
    const { addToCart } = useCart();

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "30px" }}>
            <Card sx={{ maxWidth: 500 }}>
              <CardHeader title={props.product.name} />
              <CardMedia
                component="img"
                height="140"
                image={props.product.image ? props.product.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDN5oYPxAWzDeDqBjmcFv0C-t1N_PwGhJEdQ&s'}
                alt={props.product.name}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {props.product.description}
                  <br />
                  {props.product.catalog ? props.product.catalog : 'Sin categoría'}
                </Typography>
                <span>Precio: {props.product.price}</span>
                <br />
                <span>Stock: {props.product.stock}</span>
                <Tooltip title='Añadir al carrito'>
                  <IconButton onClick={() => addToCart(props.product)} color="primary" aria-label='añadir al carrito'>
                    <AddShoppingCartIcon />
                  </IconButton>
                </Tooltip>
              </CardContent>
            </Card>
        </div>
    );
}

export default Feed;