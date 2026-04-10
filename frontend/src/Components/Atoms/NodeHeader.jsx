import React from "react";
import styled from "styled-components";


const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;

  border: 1px solid ${({ theme }) => theme?.border || "rgb(165, 180, 252)"};
  background-color: ${({ theme }) =>
    theme?.background || "rgb(238, 242, 255)"};
  border-radius: 6px;
  padding: 6px 12px;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const IconButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;

const Description = styled.div`
  font-size: 14px;
  color: #4b5563;
`;

const NodeHeader = ({
  title,
  iconName,
  desc,
  onDelete,
  onHideContent,
  showContents,
}) => {
  return (
    <HeaderWrapper>
      <HeaderTop>
        <TitleWrapper>
          {iconName && (
            <span className="material-symbols-outlined">{iconName}</span>
          )}
          <Title>{title}</Title>
        </TitleWrapper>

        <IconButtonGroup>
          <span className="material-symbols-outlined" onClick={onHideContent}>
            {showContents ? "close_fullscreen" : "pan_zoom"}
          </span>

          <span className="material-symbols-outlined" onClick={onDelete}>
            cancel
          </span>
        </IconButtonGroup>
      </HeaderTop>

      {desc && <Description>{desc}</Description>}
    </HeaderWrapper>
  );
};

export default NodeHeader;
