import { useState } from 'react'
import reactLogo from './assets/react.svg'

//#region components
import Header from "./components/header"
import Money from "./components/money"
import Things from "./components/things"
import Receipt from "./components/receipt"
import { getTotalReceipt } from './redux/selectors'
//#endregion
export default function App() {
 
  return (
    <div className="bg-light-900 w-full  py-24">
      <Header />
      <main className='w-6/8 mx-1/8 mt-8 w-full'>
        <Money />
        <Things />
        {((totalReceipt) => totalReceipt > 0 && <Receipt totalReceipt={totalReceipt} />)(getTotalReceipt())}
      </main>
      
    </div>
  )
}


