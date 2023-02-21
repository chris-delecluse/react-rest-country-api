import React, { FC, useEffect, useRef, useState } from 'react';
import { InputSelectType } from "./inputSelect.type";
import { ButtonWrapper, Container, Reset, StyledButton, StyledOption } from "./inputSelect.styles";

const InputSelect: FC<InputSelectType> = ({ values, onSelectedVal }): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const [inputVal, setInputVal] = useState<string>("Filter By Region");
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <Container ref={ref}>
            <ButtonWrapper>
                <StyledButton onClick={() => {setOpen(!open)}}>
                    {inputVal}
                </StyledButton>
                <Reset onClick={() => {
                    setInputVal("Filter By Region")
                    onSelectedVal && onSelectedVal("")
                }}>
                    Reset
                </Reset>
            </ButtonWrapper>

            {open && values?.map((item, i) => {
                return (
                    <StyledOption key={i} onClick={(event) => {
                        setInputVal(event.currentTarget.textContent || "");
                        onSelectedVal && onSelectedVal(event.currentTarget.textContent || "");
                        setOpen(false);
                    }}>
                        {item.label}
                    </StyledOption>
                )
            })
            }
        </Container>
    );
};

export default InputSelect;
