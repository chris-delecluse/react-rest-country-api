import styled, { createGlobalStyle, ThemeProps } from "styled-components";
import { resetStyles } from "./reset.styles";
import { ThemeType } from "../themes/theme.type";

export const GlobalStyles = createGlobalStyle<ThemeProps<ThemeType>>`
  ${resetStyles}
  :root {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    background: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.text};
  }
`;
