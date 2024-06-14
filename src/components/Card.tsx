import React from 'react';

export type CardProps = {
    name: string,
    image: string,
    id: number
}
const Card = (props: CardProps) => {
  return(
    <div className="w-full h-40 m-4 border-2 border-blue-500">
      {props.name}
    </div>
  );
};

export default Card;
