import React from "react"
import { InfoContainer, InfoWrapper } from "./Info.styles"

import Featured from "./Featured"
import Popular from "./Popular"

const Info = () => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <Featured />
        <Popular />
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Info
