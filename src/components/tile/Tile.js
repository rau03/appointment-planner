import React from "react";

export const Tile = ({ element }) => {
  const elementArray = Object.values(element);
  return (
    <div className='tile-container tile'>
      {elementArray.map((element, index) =>
        index === 0 ? (
          <p
            className='tile-title'
            key={index}
          >
            {element}
          </p>
        ) : (
          <p key={index}>{element}</p>
        )
      )}
    </div>
  );
};