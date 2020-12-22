import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  PopularContainer,
  PopularTitle,
  PopularList,
  PopularItem,
  ItemTitle,
  ItemSub,
} from "./Popular.styles"

const Popular = () => {
  const [mostPlayed, setMostPlayed] = useState([])

  const data = useStaticQuery(graphql`
    query {
      allPopularJson {
        edges {
          node {
            title
            plays
          }
        }
      }
    }
  `)

  function handleMostPlays() {
    let arr = data.allPopularJson.edges.sort((a, b) => {
      return a.node.plays + b.node.plays
    })

    setMostPlayed(arr)
  }

  useEffect(() => {
    handleMostPlays()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PopularContainer>
      <PopularTitle>Weekly Popular</PopularTitle>
      <PopularList>
        {mostPlayed.map((item, key) => {
          return (
            <PopularItem key={key}>
              <ItemTitle>{item.node.title}</ItemTitle>
              <ItemSub>{item.node.plays} plays</ItemSub>
            </PopularItem>
          )
        })}
      </PopularList>
    </PopularContainer>
  )
}

export default Popular
