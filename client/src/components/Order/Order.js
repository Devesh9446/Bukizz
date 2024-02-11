import React from 'react'
import Cancelled from './Cancelled.js'
import Delivered from './Delivered.js'
import Out_For_Delivery from './Out_For_Delivery.js'
import Processing from './Processing.js'

function Order() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ORDERS</th>
            <th>PENDING</th>
            <th>OUT FOR DELIVERY</th>
            <th>DELIVERED</th>
            <th>CANCELLED</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Order
