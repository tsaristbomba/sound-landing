import React from "react"
import PropTypes from "prop-types"

import Navbar from "./Navbar"
import { GlobalStyles } from "../GlobalStyles"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
