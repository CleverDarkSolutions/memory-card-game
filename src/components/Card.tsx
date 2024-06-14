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
    <div className={`w-24 h-36 m-4 transform transition-transform duration-1000 ${props.flipped ? 'rotate-y-180' : ''}`}>
      {props.flipped ? (
        <div className="h-full backface-hidden flex items-center justify-center border-black border-2 p-4 rounded">
          <img src={props.image}/>
        </div>
      ) : (
        <div className="h-full backface-hidden flex items-center justify-center bg-contain bg-no-repeat bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Card_back_01.svg/703px-Card_back_01.svg.png')]" onClick={() => props.flip(props.id)}>
        </div>
      )}
    </div>
  );
};

export default Card;
