import React, { FC } from 'react';
import { StyledButton2 } from "./button.styles";

export type ButtonType = {
    name: string;
    onclick: () => void;
}

const Button: FC<ButtonType> = ({ name, onclick }): JSX.Element => {
    return (
        <StyledButton2 onClick={onclick}>
            {name}
        </StyledButton2>
    );
};

export default Button;
