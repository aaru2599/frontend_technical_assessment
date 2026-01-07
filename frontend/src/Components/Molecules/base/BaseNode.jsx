import React, { useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import styled from "styled-components";
import NodeHeader from "../../Atoms/NodeHeader";

const MainComponent = styled.div`
  width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;

  border: 1px solid #430b8a;
  border-radius: 6px;
  padding: 12px;

  box-sizing: border-box;
  background-color: #f9f9f9;
  position: relative;
  font-family: sans-serif;
`;

export const BaseNode = ({
  id,
  title,
  iconName,
  width = 285,
  height = 80,
  inputs = [],
  outputs = [],
  contents,
  desc
}) => {

    const { setNodes } = useReactFlow();
    const [showContents, setShowContents] = useState(true); 
    console.log("@AM set node",setNodes);
    const handleDelete=()=>{
      setNodes((node)=>node.filter((n)=>n.id!==id))
      console.log("@AM delete");
      
    }
    
    const handleShowState=()=>{
      setShowContents(!showContents);
    }
  return (
    <MainComponent width={width} height={height}>
      <NodeHeader
      iconName={iconName}
      onDelete={handleDelete}
      title={title} 
      desc={desc}
      onHideContent={handleShowState}
      showContents={showContents}
      />

      {/* Inputs Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{
            top: 20 + index * 20,
            background: "#555",
            width: 10,
            height: 10,
          }}
        />
      ))}

      {/* Outputs Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{
            top: 20 + index * 20,
            background: "#555",
            width: 10,
            height: 10,
          }}
        />
      ))}

      {/* Node Content */}
      {showContents&&<div style={{ marginTop: 4 }}>{contents}</div>}
      
    </MainComponent>
  );
};
