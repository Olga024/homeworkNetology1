import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

interface ShopItemProps {
  name: string;
  price: string;
  color: string;
  img: string;
}

const ShopItem: React.FC<ShopItemProps> = ({ name, price, color, img }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={img} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography variant="body2" color="text.secondary">
              Цена: {price} $
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Цвет: {color}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default ShopItem;