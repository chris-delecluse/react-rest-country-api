import styled from "styled-components";
import { InputTextType } from "./inputText.type";

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledInputTextField = styled.input<InputTextType>`
  background-color: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.text};
  width: 100%;
  padding: 1.2em 4em;
  border: none;
  border-radius: 0.5em;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 1.5em;
  top: 1.3em;
`;
