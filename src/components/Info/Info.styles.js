import styled from "styled-components"

export const InfoContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`
export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 68% 25%;
  grid-template-areas: "col1 col2";
  align-items: flex-start;
  justify-content: center;
  grid-gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: "col1" "col2";
    margin: 24px;
  }
`
