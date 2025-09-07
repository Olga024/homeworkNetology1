import React from 'react';
import ShopCard from './ShopCard';

type CardsViewProps = {
  cards: {
    name: string;
    price: string;
    color: string;
    img: string;
  }[];
};

const CardsView: React.FC<CardsViewProps> = ({ cards }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {cards.map((card, index) => (
        <ShopCard key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsView;