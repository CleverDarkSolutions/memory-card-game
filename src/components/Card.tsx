import React from 'react';

export type CardProps = {
    name: string,
    image: string,
    id: number,
    flip: (id: number) => void,
    flipped: boolean,
}
const Card = (props: CardProps) => {
  return(
    <div className="w-full h-40 m-4 border-2 border-blue-500">
      {props.flipped ? <div className="bg-black text-white h-full">flipped</div> : <div className="h-full" onClick={()=>props.flip(props.id)}>{props.name}</div>}
    </div>
  );
};

export default Card;
