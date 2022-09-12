import React from 'react'
import { getReceipts } from '../redux/selectors'
import ReceiptItem from './receiptItem'
export default function receipt({totalReceipt}) {
    
    return (
        <section className='bg-white p-12'>
            <h2 className='text-2xl font-bold text-center py-8'>Your Receipt</h2>      
            
            <table className='table table-auto p-8 mx-auto'>
                <tbody className='table-row-group'>
                    {
                        getReceipts().map(r => <ReceiptItem item={r} key={r.id} />)
                    }
                </tbody>
                <tfoot className='table-footer-group'>
                    <tr className='table-row border-t-3'>
                        <td className='table-cell px-4 text-xl font-bold  py-1'>TOTAL</td>
                        <td className='table-cell px-4 text-xl text-right font-bold text-green-600  py-1' colSpan={2}> $ {totalReceipt} </td>
                    </tr>
                </tfoot>
            </table>  
            
        </section>  
  )
}
