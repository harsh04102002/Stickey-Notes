import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Block.css";

function Block({ color }) {
  const [title, setTitle] = useState("Untitled");
  const [body, setBody] = useState("");

  return (
    <Draggable>
      <div
        className="row_block"
        style={{
          backgroundColor: `rgba${color.rgb}`,
        }}
        >
        <form>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            ></textarea>
        </form>
      </div>
    </Draggable>
  );
}

export default Block;
