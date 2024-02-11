import React from 'react'
import styled from 'styled-components';

function Product() {
  return (
    <div>
      <table>
        <TableHead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </TableHead>
      </table>
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

export default Product
 