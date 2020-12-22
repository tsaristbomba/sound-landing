import styled from "styled-components"

export const HeroContainer = styled.div`
  background: #dde1e2;
  padding-bottom: 80px;
  margin: 0 auto;
`
export const HeroWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 80px 24px 0 24px;
  max-width: 1100px;
  height: 65vh;
  min-height: 450px;
  /* position: absolute; */
  margin: -80px auto 0 auto;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
    height: auto;
  }
`
export const HeroBg = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  grid-area: col2;
`
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`
export const HeroContent = styled.div`
  max-width: 400px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    padding-top: 1rem;
  }
`
export const HeroTitle = styled.h1`
  font-size: 45px;
  align-self: flex-start;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 280px) {
    font-size: 35px;
  }
`
export const HeroSub = styled.p`
  align-self: flex-start;
`
export const HeroForm = styled.div`
  padding: 8px;
  background: #fff;
  border-radius: 50px;
  display: inline-flex;
  width: 400px;
  align-items: center;
  margin: 1rem 0;
  position: absolute;
  left: 30%;
  z-index: 1;

  @media screen and (max-width: 768px) {
    position: static;
    width: 300px;
    left: 0;
  }

  @media screen and (max-width: 280px) {
    width: 100%;
    padding: 4px;
  }
`
export const HeroInput = styled.input`
  border-radius: 20px;
  padding: 12px 1.2rem;
  width: 250px;
  border: none;

  @media screen and (max-width: 768px) {
    width: 150px;
  }
`
export const HeroBtn = styled.button`
  border: none;
  border-radius: 50px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: background 0.2s ease;
  color: #fff;
  background: #27464f;
  font-size: 1rem;
  margin-left: auto;

  &:hover {
    background: #27464f;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 1rem;
  }

  @media screen and (max-width: 280px) {
    padding: 4px 12px;
    font-size: 12px;
  }
`
