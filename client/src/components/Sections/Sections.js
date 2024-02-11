import React from 'react'
import styled from 'styled-components';

function Sections(props) {
  return (
    <>
        <Container>
            <div onClick={()=>{props.handleOnClick("Product")}}>PRODUCT</div>
            <div onClick={()=>{props.handleOnClick("Query")}}>QUERY</div>
            <div onClick={()=>{props.handleOnClick("Vendor")}}>VENDOR</div>
            <div onClick={()=>{props.handleOnClick("Order")}}>ORDERS</div>
        </Container>
    </>
  )
}
 
const Container =styled.div`
background-image:linear-gradient(to top,#D4145A,#FBB03B);
width:15vw;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
font:white
`

export default Sections
