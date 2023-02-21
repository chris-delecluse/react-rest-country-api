import React, { FC } from 'react';
import { StyledParagraph } from "./paragraph.styles";
import { ParagraphType } from "./Paragraph.type";

const Paragraph: FC<ParagraphType> = ({ bold, children }) => {
    return (
        <StyledParagraph bold={bold}>
            {children}
        </StyledParagraph>
    );
};

export default Paragraph;
