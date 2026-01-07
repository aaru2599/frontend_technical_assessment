import { NodeContainer } from "../../Atoms/Styles/NodeStyles";
import { BaseNode } from "../base/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[
        { id: `${id}-system`, top: "33%" },
        { id: `${id}-prompt`, top: "66%" },
  
      ]}
      id={id}
      iconName="build_circle"
      outputs={[{ id: `${id}-response` }]}
      contents={
        <NodeContainer>
          This is a LLM. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Harum consectetur nemo illum maxime, tempore reprehenderit cum
          deserunt non eum quidem numquam voluptatibus consequuntur provident
          pariatur sapiente, quos ad voluptate culpa ab laboriosam officia
          adipisci ea! Enim non ratione provident error cum facere aliquam
          repellendus qui amet est? Sed, voluptatem nobis!
        </NodeContainer>
      }
    ></BaseNode>
  );
};
