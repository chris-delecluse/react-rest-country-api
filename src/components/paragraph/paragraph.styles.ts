import styled, { css } from "styled-components";
import { ParagraphType } from "./Paragraph.type";

export const StyledParagraph = styled.p<ParagraphType>`
  ${props => props.bold && css`
    font-weight: bold;
  `};
`;
