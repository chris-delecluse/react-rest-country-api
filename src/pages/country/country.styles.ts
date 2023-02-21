import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 2rem;
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 501px) {
    flex-direction: row;
  }
`;

export const ImgWrapper = styled.div`
  margin-top: 3em;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 300px;
  
  @media (min-width: 501px) {
    width: 450px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: 700;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledSpan = styled.span`
  border: 1px solid #000;
  border-radius: 0.5em;
  padding: .3em 1.5em;
  background-color: ${props => props.theme.backgroundSecondary};
`;

export const BorderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  
  @media (min-width: 501px) {
    justify-content: space-around;
    margin: 2.5em 7em;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media (min-width: 501px) {
    flex-direction: column;
  }
  
  @media (min-width: 1150px) {
    flex-direction: row;
  }
`;
