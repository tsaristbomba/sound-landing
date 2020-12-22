import React from "react"
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroWrapper,
  HeroContent,
  HeroTitle,
  HeroSub,
  HeroForm,
  HeroInput,
  HeroBtn,
} from "./Hero.styles"
import heroBg from "../../images/hero-bg.svg"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroContent>
          <HeroTitle>Melodies that help you stay focused</HeroTitle>
          <HeroSub>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            quisquam. Quasi reiciendis placeat incidunt molestiae.
          </HeroSub>
          <form action="#">
            <HeroForm>
              <label htmlFor="email">
                <HeroInput
                  type="email"
                  placeholder="Your email address"
                  id="email"
                />
              </label>
              <HeroBtn as="button" type="submit">
                Get Started
              </HeroBtn>
            </HeroForm>
          </form>
        </HeroContent>
        <HeroBg>
          <ImageBg src={heroBg} alt="Hero" />
        </HeroBg>
      </HeroWrapper>
    </HeroContainer>
  )
}

export default Hero
