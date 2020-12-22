import React from "react"

import {
  FooterContainer,
  FooterWrapper,
  FooterSocials,
  SocialLink,
  InstagramIcon,
  EmailIcon,
  FooterLogo,
  LogoSpan,
  FooterRights,
} from "./Footer.styles"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSocials>
          <SocialLink href="">
            <InstagramIcon />
          </SocialLink>
          <SocialLink href="">
            <EmailIcon />
          </SocialLink>
        </FooterSocials>

        <FooterRights>
          <FooterLogo to="/">
            <LogoSpan>S</LogoSpan>Soundtrack{" "}
          </FooterLogo>
          ⓒ {new Date().getFullYear()} all rights reserved.
        </FooterRights>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
