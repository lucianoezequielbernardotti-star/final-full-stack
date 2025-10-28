import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function Feed(props) {

    return (
        <div>
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
              </CardContent>
            </Card>
        </div>
    );
}

export default Feed;