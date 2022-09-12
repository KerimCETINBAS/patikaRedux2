import React from 'react'
import millify from 'millify'
export default function receiptItem({item}) {
    return (
        <tr className="table-row">
            <td className='table-cell text-lg font-semibold px-4 py-1'> {item.name} </td>
            <td className='table-cell text-lg font-semibold px-4  py-1  text-right'> x{item.amount} </td>
            <td className="table-cell text-xl font-semibold text-green-600 px-4  text-right  py-1"> {millify(item.price)} </td>
        </tr>
   
  )
}
