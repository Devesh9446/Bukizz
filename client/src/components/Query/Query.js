import React from 'react'
import Outcome from './Outcome.js'
import Processed from './Processed.js'
import Refund from './Refund.js'
import Replace from './Replace.js'

function Query() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>QUERY</th>
            <th>PROCESSED</th>
            <th>REPLACE</th>
            <th>REFUNDED</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Query
