import React, { FC } from 'react';
import { Container, CountryName, CountryText, ImageWrapper, Span, TextWrapper, Image } from "./card.styles";
import Paragraph from "../paragraph";
import { CardType } from "./card.type";

const Card: FC<CardType> = ({ country, onClick }) => {
    return (
        <Container onClick={onClick}>
            <ImageWrapper>
                <Image src={country.flags.png} alt={country.flags.alt}/>
            </ImageWrapper>
            <TextWrapper>
                <CountryName>{country.name.common}</CountryName>
                <CountryText>
                    <Paragraph bold>Population: <Span>{country.population}</Span></Paragraph>
                    <Paragraph bold>Region: <Span>{country.region}</Span></Paragraph>
                    <Paragraph bold>Capital: <Span>{country.capital}</Span></Paragraph>
                </CountryText>
            </TextWrapper>
        </Container>
    );
};

export default Card;
