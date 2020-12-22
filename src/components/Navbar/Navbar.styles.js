import styled from "styled-components"
import { Link } from "gatsby"

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 0;
  padding: 0 24px;
  /* margin-top: -80px; */
  /* position: absolute; */
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`
export const NavLogo = styled(Link)`
  display: flex;
  justify-self: center;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  color: #27464f;
  font-weight: bold;
`
export const LogoSpan = styled.span`
  background: #27464f;
  color: #fff;
  border-radius: 50%;
  margin-right: 8px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
`
export const MobileIcon = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background: transparent;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-180%, 90%);
    font-size: 1.8rem;
    color: #27464f;
    border-radius: 10px;
  }

  @media screen and (max-width: 480px) {
    transform: translate(-105%, 70%);
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  transition: all 0.2s ease;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
    height: 300px;
    top: ${({ $click }) => ($click ? "80px" : "-1000px")};
    left: 0;
    right: 0;
    opacity: 1;
    background: #fff;
    position: absolute;
    z-index: 1000;
    justify-content: center;
  }
`
export const NavItem = styled.li`
  height: 80px;
  display: ${({ $click }) => (!$click ? "flex" : "none")};
  align-items: center;
`
export const NavLink = styled.a`
  color: #27464f;
  text-decoration: none;
  padding: 0 1.5rem;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`
export const NavButton = styled.button`
  border: none;
  border-radius: 20px;
  padding: 8px 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
  font-size: 1rem;
  color: #27464f;
  background: #fff;

  @media screen and (max-width: 768px) {
    background: #27464f;
    color: #fff;
  }
`
