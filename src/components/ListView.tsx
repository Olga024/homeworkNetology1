import React from 'react';
import ShopItem from './ShopItem';
import List from '@mui/material/List';

type ListViewProps = {
  items: {
    name: string;
    price: string;
    color: string;
    img: string;
  }[];
};

const ListView: React.FC<ListViewProps> = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ShopItem key={index} {...item} />
      ))}
    </List>
  );
};

export default ListView;