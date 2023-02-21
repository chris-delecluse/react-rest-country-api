import React, { FC } from 'react';
import { IconWrapper, StyledInputTextField, Wrapper } from "./inputText.styles";
import { InputTextType } from "./inputText.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const InputText: FC<InputTextType> = ({ onChange }): JSX.Element => {
    return (
        <Wrapper>
            <StyledInputTextField onChange={onChange}
                                  placeholder={"Search for a country..."}/>
            <IconWrapper>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </IconWrapper>
        </Wrapper>
    );
};

export default InputText;
