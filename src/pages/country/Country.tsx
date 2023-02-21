import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router";
import { getCountry } from "../../services/countries.services";
import Paragraph from "../../components/paragraph";
import { Span } from "../../components/card/card.styles";
import { Button } from "../../components/button";
import Header from "../../components/header";
import { currencyType } from "./country.type";
import {
    BorderWrapper, Container,
    ImgWrapper,
    StyledArticle,
    StyledDiv,
    StyledImg,
    StyledSection,
    StyledSpan,
    StyledTitle, SubContainer
} from "./country.styles";
import styled from "styled-components";

const Country: FC<any> = (): JSX.Element => {
    const { name } = useParams();
    const [country, setCountry] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [curr, setCurr] = useState<string>('')
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCountry = async () => {
            const response = await getCountry(name)
            setCountry(response.data)
        }

        if (loading) {
            fetchCountry()
            setLoading(false)
        }

        const currencies = country[0]?.currencies;

        if (currencies && typeof currencies === 'object' && Object.keys(currencies).length) {
            const currencyValues: currencyType[] = Object.values(currencies);
            setCurr(currencyValues[0]?.name)
        }
    }, [country])

    return (
        <React.Fragment>
            <Header/>
            <StyledSection>
                <Button onclick={() => navigate('/')} name={"back"}/>
                <StyledArticle>
                    <ImgWrapper>
                        <StyledImg src={country[0]?.flags.png} alt={country[0]?.flags.alt}/>
                    </ImgWrapper>

                    <Container>
                        <StyledTitle>{country[0]?.name.common}</StyledTitle>

                        <SubContainer>
                            <StyledDiv>
                                <Paragraph>Native Name: <Span>{country[0]?.name.official}</Span></Paragraph>
                                <Paragraph>Population: <Span>{country[0]?.population}</Span></Paragraph>
                                <Paragraph>Region: <Span>{country[0]?.region}</Span></Paragraph>
                                <Paragraph>Sub Region: <Span>{country[0]?.subregion}</Span></Paragraph>
                                <Paragraph>Capital: <Span>{country[0]?.capital}</Span></Paragraph>
                            </StyledDiv>

                            <StyledDiv>
                                <Paragraph>Top Level Domain: <Span>{country[0]?.tld}</Span></Paragraph>
                                <Paragraph>Currency: <Span>{curr}</Span></Paragraph>
                                {country[0]?.languages &&
                                    <Paragraph>
                                        Languages:
                                        <Span>{Object.values(country[0]?.languages).join(', ')}</Span>
                                    </Paragraph>
                                }
                            </StyledDiv>
                        </SubContainer>

                        <StyledDiv>
                            {country[0]?.borders && <Paragraph>Border Countries: </Paragraph>}
                            <BorderWrapper>
                                {country[0]?.borders &&
                                    country[0]?.borders.map((border: string, key: number) => {
                                        return <StyledSpan key={key}>{border.toLowerCase()}</StyledSpan>
                                    })}
                            </BorderWrapper>
                        </StyledDiv>
                    </Container>
                </StyledArticle>
            </StyledSection>
        </React.Fragment>
    );
};

export default Country;
