import { useState } from "react";
import { BaseNode } from "../base/BaseNode";
import {
  CenteredInputWrapper,
  LabelWrapper,
  NodeContainer,
  StyledInput,
} from "../../Atoms/Styles/NodeStyles";
export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      title="Output"
      iconName={'output'}
      inputs={[{ id: `${id}-value` }]}
      id={id}
      desc={'Output data of different types from your workflow.'}
      contents={
        <NodeContainer>
          <CenteredInputWrapper>
           
              <StyledInput 
                value={currName}
                onChange={(e) => setCurrName(e.target.value)}
              />
            
          </CenteredInputWrapper>

          <LabelWrapper>
            Type:
            <select
              value={outputType}
              onChange={(e) => setOutputType(e.target.value)}
                style={{height:"30px"}}
            >
              <option value="Text">Text</option>
              <option value="File">Image</option>
            </select>
          </LabelWrapper>
        </NodeContainer>
      }
    ></BaseNode>
  );
};
