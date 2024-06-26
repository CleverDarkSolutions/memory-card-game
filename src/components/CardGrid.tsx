import React, {useEffect, useState} from 'react';
import Card from './Card';
import Timer from './Timer';

const INITIAL_CARDS = [
  {
    name: 'Card 1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfxxgtvjoywpYYFjqCM2IByvFIxA6n40Wtw&s.jpg',
    flipped: false,
    id: 1,
    pairId: 1,
  },
  {
    name: 'Card 2',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfxxgtvjoywpYYFjqCM2IByvFIxA6n40Wtw&s.jpg',
    flipped: false,
    id: 2,
    pairId: 1,
  },
  {
    name: 'Card 3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
    flipped: false,
    id: 3,
    pairId: 2,
  },
  {
    name: 'Card 4',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
    flipped: false,
    id: 4,
    pairId: 2,
  },
  {
    name: 'Card 5',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    flipped: false,
    id: 5,
    pairId: 3,
  },
  {
    name: 'Card 6',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    flipped: false,
    id: 6,
    pairId: 3
  },
  {
    name: 'Card 7',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    flipped: false,
    id: 7,
    pairId: 4,
  },
  {
    name: 'Card 8',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    flipped: false,
    id: 8,
    pairId: 4,
  },
  {
    name: 'Card 9',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    flipped: false,
    id: 9,
    pairId: 5,
  },
  {
    name: 'Card 10',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    flipped: false,
    id: 10,
    pairId: 5,
  },
  {
    name: 'Card 11',
    image: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg',
    flipped: false,
    id: 11,
    pairId: 6,
  },
  {
    name: 'Card 12',
    image: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg',
    flipped: false,
    id: 12,
    pairId: 6,
  },
  {
    name: 'Card 13',
    image: 'https://miro.medium.com/v2/resize:fit:400/1*OARpkeBkn_Tw3vk8H769OQ.png',
    flipped: false,
    id: 13,
    pairId: 7,
  },
  {
    name: 'Card 14',
    image: 'https://miro.medium.com/v2/resize:fit:400/1*OARpkeBkn_Tw3vk8H769OQ.png',
    flipped: false,
    id: 14,
    pairId: 7,
  },
  {
    name: 'Card 15',
    image: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
    flipped: false,
    id: 15,
    pairId: 8,
  },
  {
    name: 'Card 16',
    image: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
    flipped: false,
    id: 16,
    pairId: 8,
  },
  {
    name: 'Card 17',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png',
    flipped: false,
    id: 17,
    pairId: 9,
  },
  {
    name: 'Card 18',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png',
    flipped: false,
    id: 18,
    pairId: 9,
  },
  {
    name: 'Card 19',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg',
    flipped: false,
    id: 19,
    pairId: 10,
  },    {
    name: 'Card 20',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg',
    flipped: false,
    id: 20,
    pairId: 10,
  },
];

export type Card = {
  name: string,
  image: string,
  flipped: boolean,
  id: number,
  pairId: number
}
const CardGrid = () => {
  const [cards, setCards] = useState<Card[]>(INITIAL_CARDS);

  const [matches, setMatches] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Array<number>>([]);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState('Click button to start the game');
  const [gridSize, setGridSize] = useState(16);
  const [winningMessage, setWinningMessage] = useState('');

  const shuffleArray = (array: Card[]) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  };



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

  const resetCards = () => {
    setCards(INITIAL_CARDS);
  };

  const flipCard = (id: number) => {
    if(flippedCards.length < 2 && isActive) {
      const newCards = cards.map(card =>
        card.id === id ? { ...card, flipped: true } : card
      );
      setTimeout(() => setCards(newCards), 200);
      setFlippedCards([...flippedCards, id]);
      setMoves(moves + 1);
    }
  };

  useEffect(() => {
    if(flippedCards.length === 2) {
      setTimeout( () => {checkCards();}, 1500);
    }
  }, [flippedCards]);

  useEffect(() => {
    if(matches === cards.length / 2) {
      setIsActive(false);
      setWinningMessage('You have won');
    }
  }, [matches]);
  return(
    <div>
      <div className="absolute top-8 left-8 flex flex-col w-[20vw]">
        <div className="text-4xl my-4">{status}</div>
        <div className="text-xl">
          Select grid size:
          <select
            className="m-4"
            name="grid-size"
            value={gridSize}
            onChange={ event => setGridSize(Number(event.target.value))}
          >
            <option value={16}>4x4</option>
            <option value={20}>5x4</option>
          </select>
        </div>
        <button
          disabled={isActive}
          className="bg-blue-400 text-white rounded h-12 w-full mb-4"
          onClick={() => {
            setCards(shuffleArray(cards.slice(0,gridSize)));
            setIsActive(true);
            setStatus('The game is in progress');
          }}>Start
        </button>
        <button className="bg-blue-400 text-white rounded h-12 w-full mb-4" onClick={() => {
          setIsActive(false);
          setSeconds(0);
          setMoves(0);
          resetCards();
          setStatus('Click button to start the game');
          setWinningMessage('');
        }}>Reset
        </button>
        <div className="text-2xl">Moves: {Math.round(moves / 2)}</div>
        <Timer
          seconds={seconds}
          setSeconds={setSeconds}
          isActive={isActive}
          setIsActive={setIsActive}/>
      </div>
      <div className="text-2xl">{winningMessage}</div>
      <div className="mx-auto grid grid-cols-4 w-[30vw] transition-all duration-1000 card-grid">
        {isActive && cards.slice(0,gridSize).map( (card) => (
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
    </div>
  );
};

export default CardGrid;
