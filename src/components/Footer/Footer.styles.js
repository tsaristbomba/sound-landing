import styled from "styled-components"
import { FiInstagram, FiMail } from "react-icons/fi"
import { Link } from "gatsby"

export const FooterContainer = styled.div`
  background: #dde1e2;
`
export const FooterWrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 48px;

  @media screen and (max-width: 480px) {
    height: 100px;
    flex-direction: column;
    justify-content: center;
    margin: 0 24px;
  }
`
export const FooterSocials = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 480px) {
    margin-bottom: 1rem;
  }
`
export const SocialLink = styled.a`
  display: flex;
  align-items: center;
`
export const InstagramIcon = styled(FiInstagram)`
  margin-right: 1rem;
  font-size: 22px;
`
export const EmailIcon = styled(FiMail)`
  font-size: 24px;
`
export const FooterRights = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
`
export const FooterLogo = styled(Link)`
  display: flex;
  justify-self: center;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  color: #27464f;
  font-weight: bold;
  margin-right: 8px;
`
export const LogoSpan = styled.div`
  background: #27464f;
  color: #fff;
  border-radius: 50%;
  margin-right: 4px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
`
