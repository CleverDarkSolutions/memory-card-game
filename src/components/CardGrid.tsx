import React, {useState} from 'react';
import Card from './Card';



const CardGrid = () => {
  const [cards, setCards] = useState([
    {
      name: 'Card 1',
      image: 'string',
      flipped: false,
      id: 1
    },
    {
      name: 'Card 2',
      image: 'string',
      flipped: false,
      id: 1
    },
    {
      name: 'Card 3',
      image: 'string',
      flipped: false,
      id: 2,
    },
    {
      name: 'Card 4',
      image: 'string',
      flipped: false,
      id: 2
    },
    {
      name: 'Card 5',
      image: 'string',
      flipped: false,
      id: 3
    },
    {
      name: 'Card 6',
      image: 'string',
      flipped: false,
      id: 3
    },
    {
      name: 'Card 7',
      image: 'string',
      flipped: false,
      id: 4
    },
    {
      name: 'Card 8',
      image: 'string',
      flipped: false,
      id: 4
    },
  ]);
  const flipCard = (id: number) => {
    const newCards = cards.map(card =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setCards(newCards);
  };
  return(
    <div className="mx-auto grid grid-cols-4 gap-4 w-[70vw]">
      {cards.map( (card) => (
        <Card
          key={card.id}
          name={card.name}
          image={card.image}
          id={card.id}
          flip={() => flipCard(card.id)}
          flipped={card.flipped}
        />
      ))}
    </div>
  );
};

export default CardGrid;
