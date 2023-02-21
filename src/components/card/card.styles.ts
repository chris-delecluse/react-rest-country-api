import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  height: 45vh;
  cursor: pointer;
  transition: transform .2s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    transition: transform .2s ease-in-out;
  }
`;

export const ImageWrapper = styled.div`
  height: 60%;
  overflow: hidden;
  border-top-left-radius: .4em;
  border-top-right-radius: .4em;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
  background-color: ${props => props.theme.backgroundSecondary};
  border-bottom-left-radius: .4em;
  border-bottom-right-radius: .4em;
  padding: 2em;
`;

export const CountryName = styled.h3`
  margin-bottom: 1.2em;
  font-size: 1.5em;
  font-weight: 700;
`;

export const CountryText = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5em;
`;

export const Span = styled.span`
  font-weight: normal;
`;
