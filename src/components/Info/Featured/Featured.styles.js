import styled from "styled-components"
import Img from "gatsby-image"

export const FeaturedContainer = styled.div`
  grid-area: col1;
`
export const FeaturedTitle = styled.h2`
  margin-bottom: 1rem;
`
export const FeaturedBoxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`
export const FeaturedItem = styled.div`
  position: relative;
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const ItemImage = styled(Img)`
  width: 100%;
  border-radius: 20px;
  cursor: pointer;
  opacity: 0.93;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`
export const ItemTime = styled.small`
  position: absolute;
  bottom: 5.5rem;
  right: 0.9rem;
  padding: 3px 6px;
  background: #fff;
  border-radius: 15px;
`
export const ItemTitle = styled.h3`
  margin: 4px 0;
`
export const ItemSub = styled.p`
  margin: 4px 0 1.5rem 0;
  font-size: 14px;
  color: gray;
`
