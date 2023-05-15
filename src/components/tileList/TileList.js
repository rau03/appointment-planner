import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ elements }) => {
  return (
    <div id='tileList'>
      {elements.map((element, index) => (
        <Tile
          element={element}
          key={index}
        />
      ))}
    </div>
  );
};