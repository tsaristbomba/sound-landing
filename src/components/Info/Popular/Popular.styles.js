import styled from "styled-components"

export const PopularContainer = styled.div`
  grid-area: col2;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    margin: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`
export const PopularTitle = styled.h2`
  margin-bottom: 1rem;
`
export const PopularList = styled.ol`
  list-style: none;
  counter-reset: my-counter;
  padding-left: 40px;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
  }
`
export const PopularItem = styled.li`
  counter-increment: my-counter;
  position: relative;

  ::before {
    content: counter(my-counter) ". ";
    border: 1px solid gray;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    top: 0;
    left: calc(-1 * 40px - 10px);
  }
`
export const ItemTitle = styled.h4`
  margin: 0;
`
export const ItemSub = styled.p`
  margin: 4px 0 2rem 0;
  font-size: 14px;
  color: gray;
`
