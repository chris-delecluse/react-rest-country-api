import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Reset = styled.span`
  position: absolute;
  right: 1.2em;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  background-color: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.text};
  padding: 1.2em 1.5em;
  border: none;
  border-radius: 0.5em;
  text-align: left;
`;

export const StyledOption = styled.div`
  padding: .7em 1.2em;
  cursor: pointer;
  border-radius: 0.5em;

  &:hover {
    background-color: darkgray;
  }
`;
