import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  margin-top: 2em;
  padding: 0 2em;

  @media (min-width: 501px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const InputTextWrapper = styled.div`
  @media (min-width: 501px) {
    width: 40%;
  }
`;

export const InputSelectWrapper = styled.div`
  @media (min-width: 501px) {
    width: 250px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap ;
  margin: 4em;
  gap: 2.5em;

  @media (min-width: 501px) {
    flex-direction: row;
  }
`;
