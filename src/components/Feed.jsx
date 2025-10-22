import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Cardheader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function Feed(props) {

    return (
        <div style={style.feed}>
            <Card sx={{ maxWidth: 500 }}>
              <Cardheader title={props.product.name} style={style.title} />
              <CardMedia
                component="img"
                height="140"
                image={props.product.image ? props.product.image : ''}
                alt={props.product.name}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" style={style.detail}>
                  {props.product.description}
                </Typography>
                <span>{props.product.price}</span>
              </CardContent>
            </Card>
        </div>
    );
}
const style = {
    feed: {
        backgroundColor: '#eee',
        border: '1px solid #ccc',
        margin: 10,
        width: 500
    },
    title: {
        fontSize: 24
    },
    detail: {
        fontSize: 18
    }
}
export default Feed;