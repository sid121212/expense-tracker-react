import React from 'react'

export const TransactionList = () => {
  return (
    <div>
        <h3>History</h3>
        <li className="minus">
          Cash <span>-$400</span><button className="delete-btn">x</button>
        </li>
    </div>
  )
}
