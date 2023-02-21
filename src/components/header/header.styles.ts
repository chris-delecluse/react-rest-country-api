import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 7vh;
  background-color: ${props => props.theme.backgroundSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const StyledTitle = styled.h1`
  font-weight: bold;
  font-size: 14px;
`;
