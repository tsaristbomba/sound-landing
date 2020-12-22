import React from "react"

import Hero from "../components/Hero"
import Info from "../components/Info"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Info />
  </Layout>
)

export default IndexPage
