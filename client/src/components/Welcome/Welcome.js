import React from 'react'
import styled from "styled-components"

function Welcome() {
  return (
    <Container>
      WELCOME Sugam
    </Container>
  )
}

const Container=styled.div`
  display:flex;
  width:79.7vw;
  height:100vh;
  justify-content:center;
  align-items:center;
`

export default Welcome
