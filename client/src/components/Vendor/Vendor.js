import React, { useState } from 'react';
import styled from 'styled-components';
import Cancelled from './Cancelled.js';
import Delivered from './Delivered.js';
import Order from './Order.js';
import Out_For_Delivery from './Out_For_Delivery.js';
import Payment from './Payment.js';
import Process from './Process.js';

function Vendor() {
  const [Current, setCurrent] = useState(undefined);

  const handleOnClick = (event) => {
    setCurrent(event);
  };

  const renderComponent = () => {
    if (Current === "Cancelled") {
      return <Cancelled />;
    } else if (Current === "Delivered") {
      return <Delivered />;
    } else if (Current === "Order") {
      return <Order />;
    } else if (Current === "Payment") {
      return <Payment />;
    } else if (Current === "Out_For_Delivery") {
      return <Out_For_Delivery />;
    } else if (Current === "Process") {
      return <Process />;
    }
  };

  return (
    <div>
      <table>
        <TableHead>
          <tr>
            <th onClick={() => { handleOnClick("Cancelled") }}>CANCELLED</th>
            <th onClick={() => { handleOnClick("Delivered") }}>DELIVERED</th>
            <th onClick={() => { handleOnClick("Order") }}>Order</th>
            <th onClick={() => { handleOnClick("Out_For_Delivery") }}>OUT FOR DELIVERY</th>
            <th onClick={() => { handleOnClick("Payment") }}>PAYMENT</th>
            <th onClick={() => { handleOnClick("Process") }}>PROCESS</th>
          </tr>
        </TableHead>
      </table>
      {renderComponent()}
    </div>
  );
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

export default Vendor;
