import React, { FC, useContext } from 'react';
import { Right, StyledTitle, StyledHeader } from "./header.styles";
import Paragraph from "../paragraph";
import { ThemeContext } from "../../context";
import { darkTheme } from "../../styles";

const Header: FC<any> = (): JSX.Element => {
    const context = useContext(ThemeContext);

    return (
        <StyledHeader>
            <StyledTitle>Where in the world?</StyledTitle>
            <Right>
                <button onClick={context.toggleTheme}>theme</button>
                <Paragraph>
                    {context.theme === darkTheme ? 'Dark ' : 'Light '} mode
                </Paragraph>
            </Right>
        </StyledHeader>
    );
};

export default Header;
