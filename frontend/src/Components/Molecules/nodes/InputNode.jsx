import { useState } from "react";
import { BaseNode } from "../base/BaseNode";
import {
  CenteredInputWrapper,
  LabelWrapper,
  NodeContainer,
  StyledInput,
} from "../../Atoms/Styles/NodeStyles";

// import { BaseNode } from '../../../nodes/BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      id={id}
      title={"Input"}
      outputs={[{ id: `${id}-value` }]}
      iconName="input"
      desc={"Pass data of different types into your workflow"}
      contents={
        <NodeContainer>
          <CenteredInputWrapper>
            <StyledInput
              value={currName}
              onChange={(e) => setCurrName(e.target.value)}
            />
          </CenteredInputWrapper>

          <LabelWrapper>
            <div> Type:</div>
            <select
              value={inputType}
              onChange={(e) => setInputType(e.target.value)}
              style={{ height: "30px" }}
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </LabelWrapper>
        </NodeContainer>
      }
    ></BaseNode>
  );
};
