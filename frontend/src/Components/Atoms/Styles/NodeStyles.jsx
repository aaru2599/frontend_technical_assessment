import styled from "styled-components";

export const NodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CenteredInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const StyledInput = styled.input`
  text-align: center;
  color: #818796;
  outline: none;
  border: none;
  font-size: 16px;
  background-color: rgb(222, 223, 245);
  border-radius: 5px;
  min-width:100%;
  padding: 4px 8px;
`;

export const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
`;

export const StyledSelect = styled.select`
  height: 30px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
`;
