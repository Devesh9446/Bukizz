import React,{useState} from 'react'
import Outcome from './Outcome.js'
import Processed from './Processed.js'
import Refund from './Refund.js'
import Replace from './Replace.js'
import styled from 'styled-components';

function Query() {
  const [Current,setCurrent]=useState(undefined)

  const handleOnClick=(event)=>{
    setCurrent(event)
  }

  const renderComponent =()=>{
    if(Current==="Outcome"){
      return <Outcome/>
    }
    else if(Current==="Processed"){
      return <Processed/>
    }
    else if(Current==="Refund"){
      return <Refund/>
    }
    else if(Current==="Replace"){
      return <Replace/>
    }
  }

  return (
    <div>
      <table>
        <TableHead>
          <tr>
            <th onClick={()=>{handleOnClick("Query")}}>QUERY</th>
            <th onClick={()=>{handleOnClick("Processed")}}>PROCESSED</th>
            <th onClick={()=>{handleOnClick("Replace")}}>REPLACE</th>
            <th onClick={()=>{handleOnClick("Refunded")}}>REFUNDED</th>
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

export default Query
