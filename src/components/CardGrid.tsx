import React from 'react';
import Card from './Card';

const cards = [
  {
    name: 'Card 1',
    image: 'string',
    id: Math.floor(Math.random() * 1000)
  },
  {
    name: 'Card 2',
    image: 'string',
    id: Math.floor(Math.random() * 1000)
  },
  {
    name: 'Card 3',
    image: 'string',
    id: Math.floor(Math.random() * 1000)
  },
  {
    name: 'Card 4',
    image: 'string',
    id: Math.floor(Math.random() * 1000)
  },
  {
    name: 'Card 5',
    image: 'string',
    id: Math.floor(Math.random() * 1000)
  },
  {
    name: 'Card 6',
    image: 'string',
    id: Math.floor(Math.random() * 1000)
  },
  {
    name: 'Card 7',
    image: 'string',
    id: Math.floor(Math.random() * 1000)
  },
  {
    name: 'Card 8',
    image: 'string',
    id: Math.floor(Math.random() * 1000)
  },
];

const CardGrid = () => {
  return(
    <div className="mx-auto grid grid-cols-4 gap-4 w-[70vw]">
      {cards.map( (card) => (
        <Card key={card.id} name={card.name} image={card.image} id={card.id}/>
      ))}
    </div>
  );
};

export default CardGrid;
