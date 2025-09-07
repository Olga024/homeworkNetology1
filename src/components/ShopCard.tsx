import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface ShopCardProps {
    name: string;
    price: string;
    color: string;
    img: string;
}

const ShopCard: React.FC<ShopCardProps> = ({ name, price, color, img }) => {
    return (<Card>
        <CardMedia component="img" height="140" image={img} alt={name} />
        <CardContent>
            <Typography variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Цена: {price} $
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Цвет: {color}
            </Typography>
            <Button variant="contained" color="primary">
          ADD TO CART
        </Button>
        </CardContent>
    </Card>)
}
export default ShopCard;