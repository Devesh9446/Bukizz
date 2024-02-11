import React,{useState} from 'react'
import Cancelled from './Cancelled.js'
import Out_For_Delivery from './Out_For_Delivery.js'
import Processing from './Processing.js'
import Delivered from './Delivered.js'
import styled from 'styled-components';

function Order() {
  const [Current,setCurrent]=useState(undefined)

  const handleOnClick=(event)=>{
    setCurrent(event)
  }

  const renderComponent=()=>{
      if(Current==="Cancelled"){
        return <Cancelled/>
      }
      else if(Current==="Out_For_Delivery"){
        return <Out_For_Delivery/>
      }
      else if(Current==="Processing"){
        return <Processing/>
      }
      else if(Current==="Delivered"){
        return <Delivered/>
      }
  }

  return (
    <div>
      <table>
        <TableHead>
          <tr>
            <th onClick={()=>{handleOnClick("Orders")}}>ORDERS</th>
            <th onClick={()=>{handleOnClick("Pending")}}>PENDING</th>
            <th onClick={()=>{handleOnClick("OUT FOR DELIVERY")}}>OUT FOR DELIVERY</th>
            <th onClick={()=>{handleOnClick("DELIVERED")}}>DELIVERED</th>
            <th onClick={()=>{handleOnClick("CANCELLED")}}>CANCELLED</th>
          </tr>
        </TableHead>
      </table>
      {renderComponent()}
    </div>
  )
}

const TableHead = styled.thead`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  th {
    border-right: 1px solid #ccc;
    padding: 8px; 
    text-align: center; 
    cursor: pointer;
  }
`;

export default Order
