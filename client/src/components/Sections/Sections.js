import React from 'react'
import styled from 'styled-components';

function Sections(props) {
  return (
    <> 
      <div>BUKIZZ</div>
      <Container>
          <div>Dashboard</div>
          <div onClick={()=>{props.handleOnClick("Product")}}>PRODUCTS</div>
          <div onClick={()=>{props.handleOnClick("Query")}}>QUERY</div>
          <div onClick={()=>{props.handleOnClick("Vendor")}}>VENDOR</div>
          <div onClick={()=>{props.handleOnClick("Order")}}>ORDERS</div>
          <div>Report</div>
          <div>New User</div>
          <div>Setting</div>
        </Container>
    </>
  )
}
 
const Container =styled.div`
width:15vw;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
div{
  margin:5px;
}
`

export default Sections
