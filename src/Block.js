import React from "react";
import Draggable from "react-draggable";
import "./Block.css";

function Block({title, color, contents}) {

  return (
    <Draggable>
      <div
        className="row_block"
        style={{
          backgroundColor: `rgba${color.rgb}`,
        }}
      >
        <div className="block_set">{title}</div>
        <div className="block_content">{contents}</div>
      </div>
    </Draggable>
  );
}

export default Block;
