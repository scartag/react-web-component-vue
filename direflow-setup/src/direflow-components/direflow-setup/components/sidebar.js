import React from "react";
import { Divider } from "antd";

const Sidebar = ({ onUpdateName = null, selectedName = "", selected = null}) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const showInput = selected && selected.id

  const handleUpdateName = (label) => {
    if (onUpdateName && typeof onUpdateName === "function") {
      onUpdateName(label);
    }
  };

  return (
    <aside>
      <h1>Sidebar</h1>
      <div className="description">
        These are just the default nodes, but we can also have our own custom
        ones. Drag and drop to canvas to test around.
      </div>
      <div>Press delete key to remove elements.</div>
      <div>
        Blue handles are targets (input); red handles are sources (output);
      </div>

      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        Input Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        Output Node
      </div>
      <Divider />
      <p>This is a custom node created. Drag and drop it to the canvas!</p>
      <div
        className="dndnode diamond"
        onDragStart={(event) => onDragStart(event, "diamond")}
        draggable
      >
        Diamond Node
      </div>
      <Divider />
      <p>Try selecting a node  with labels, then updating its label below:</p>
      {showInput && (
          
          <div>
              
        <div className="updatenode__controls">
          <label>Node label:</label>
          <input
            value={selectedName}
            onChange={(evt) => handleUpdateName(evt.target.value)}
          />
        </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
