import React from "react";
import { Handle } from 'react-flow-renderer';


const Diamond = ({ data }) => {
  return (
    <div className="diamond">
      <Handle type="source" position="top" id="diamond-1" />
      <span style={{ margin: "0 auto" }}>{data.label}</span>
      <Handle
        type="source"
        position="right"
        style={{ right: '-20%'}}
        id="diamond-2"
      />
      <Handle
        type="target"
        position="left"
        style={{ left: '-20%'}}
        id="diamond-3"

      />
      <Handle type="target" position="bottom" id="diamond-4"/>
    </div>
  );
};

export default Diamond;
