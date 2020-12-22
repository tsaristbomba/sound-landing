import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

import {
  Nav,
  NavbarContainer,
  NavLogo,
  LogoSpan,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavButton,
} from "./Navbar.styles"

const Navbar = () => {
  const [click, setClick] = useState(false)

  function handleClick() {
    setClick(!click)
  }

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <LogoSpan>S</LogoSpan>Soundtrack
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} $click={click}>
          <NavItem>
            <NavLink href="">How it works</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Library</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Pricing</NavLink>
          </NavItem>
          <NavItem $click={!click}>
            <NavButton>Login</NavButton>
          </NavItem>
        </NavMenu>
        <NavMenu>
          <NavItem>
            <NavButton>Login</NavButton>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
