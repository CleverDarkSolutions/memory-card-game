import React, {useEffect, useState} from 'react';
import Card from './Card';



const CardGrid = () => {
  const [cards, setCards] = useState([
    {
      name: 'Card 1',
      image: 'string',
      flipped: false,
      id: 1,
      pairId: 1,
    },
    {
      name: 'Card 2',
      image: 'string',
      flipped: false,
      id: 2,
      pairId: 1,
    },
    {
      name: 'Card 3',
      image: 'string',
      flipped: false,
      id: 3,
      pairId: 2,
    },
    {
      name: 'Card 4',
      image: 'string',
      flipped: false,
      id: 4,
      pairId: 2,
    },
    {
      name: 'Card 5',
      image: 'string',
      flipped: false,
      id: 5,
      pairId: 3,
    },
    {
      name: 'Card 6',
      image: 'string',
      flipped: false,
      id: 6,
      pairId: 3
    },
    {
      name: 'Card 7',
      image: 'string',
      flipped: false,
      id: 7,
      pairId: 4,
    },
    {
      name: 'Card 8',
      image: 'string',
      flipped: false,
      id: 8,
      pairId: 4,
    },
  ]);
  const [matches, setMatches] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Array<number>>([]);

  const checkCards = () => {
    const firstCard =  cards.find( item => item.id === flippedCards[0]);
    const secondCard = cards.find(item => item.id === flippedCards[1]);
    if(firstCard?.pairId === secondCard?.pairId) {
      setMatches(matches + 1);
    }
    else {
      const flipBack = cards.map(card =>
        card.id === flippedCards[0] || card.id === flippedCards[1] ? { ...card, flipped: false } : card
      );
      setCards(flipBack);
    }
    setFlippedCards([]);
  };

  const flipCard = (id: number) => {
    const newCards = cards.map(card =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setCards(newCards);
    if(flippedCards.length < 2) {
      setFlippedCards([...flippedCards, id]);
    }
  };

  useEffect(() => {
    if(flippedCards.length === 2) {
      setTimeout( () => {checkCards();}, 1500);
    }
  }, [checkCards, flippedCards]);
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
      <div className="text-2xl">Matches: {matches}</div>
      <div className="text-2xl">Flipped cards : {flippedCards.map(item => <div key={item}>{item}</div>)}</div>
    </div>
  );
};

export default CardGrid;
