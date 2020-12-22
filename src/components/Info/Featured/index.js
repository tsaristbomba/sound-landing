import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  FeaturedContainer,
  FeaturedTitle,
  FeaturedBoxes,
  FeaturedItem,
  ItemImage,
  ItemTime,
  ItemTitle,
  ItemSub,
} from "./Featured.styles"

const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      allFeaturedJson {
        edges {
          node {
            sub
            title
            readTime
            src {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <FeaturedContainer>
      <FeaturedTitle>Featured Melody</FeaturedTitle>
      <FeaturedBoxes>
        {data.allFeaturedJson.edges.map((item, key) => {
          return (
            <FeaturedItem key={key}>
              <ItemImage
                fluid={item.node.src.childImageSharp.fluid}
                alt={item.node.title}
              />
              <ItemTime>{item.node.readTime}</ItemTime>
              <ItemTitle>{item.node.title}</ItemTitle>
              <ItemSub>{item.node.sub}</ItemSub>
            </FeaturedItem>
          )
        })}
      </FeaturedBoxes>
    </FeaturedContainer>
  )
}

export default Featured
