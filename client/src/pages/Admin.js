import React,{useState} from 'react'
import styled from 'styled-components'
import Sections from "../components/Sections/Sections.js"
import Order from "../components/Order/Order.js"
import Product from "../components/Product/Product.js"
import Vendor from "../components/Vendor/Vendor.js"
import Welcome from "../components/Welcome/Welcome.js"
import Query from "../components/Query/Query.js"

function Admin() {

  const [current,SetCurrent]=useState("")
  const handleOnClick=(event)=>{
    SetCurrent(event)
  }
  const renderComponent=()=>{
    console.log(current)
    if(current==="Order")
    {
      return <Order />
    }
    else if(current==="Product")
    {
      return <Product />
    }
    else if(current==="Vendor")
    {
      return <Vendor />
    }
    else if(current==="Query")
    {
      return <Query />
    }
    else{
      return <Welcome />
    }
  }

  return (
    <Container>
      <Sections handleOnClick={handleOnClick} />
      {renderComponent()}
    </Container>
  )
}

const Container=styled.div`
display:flex;
flex-direction:row;
`

export default Admin;
