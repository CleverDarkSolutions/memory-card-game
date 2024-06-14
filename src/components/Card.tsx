import React from 'react';
import './Card.css';

export type CardProps = {
    name: string,
    image: string,
    id: number,
    flip: (id: number) => void,
    flipped: boolean,
}
const Card = (props: CardProps) => {
  return (
    <div className={`w-full h-40 m-4 border-2 border-blue-500 transform transition-transform duration-1000 ${props.flipped ? 'rotate-y-180' : ''}`}>
      {props.flipped ? (
        <div className="h-full backface-hidden flex items-center justify-center bg-cover bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Card_back_01.svg/703px-Card_back_01.svg.png')]">
        </div>
      ) : (
        <div className="h-full backface-hidden flex items-center justify-center" onClick={() => props.flip(props.id)}>
          {props.name}
        </div>
      )}
    </div>
  );
};

export default Card;
