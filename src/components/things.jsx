import React from 'react'
import Item from "./item"
import { useSelector  } from 'react-redux'
import { getItems } from '../redux/selectors'
export default function things() {

  return (
    <section className='grid  <sm:grid-cols-1 @sm:grid-cols-2 sm:grid-cols-2 md:grid-colls-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-12 py-12'>
     {
       (getItems() || []).map(item => <Item item={item} key={item.id} />)
      }
    </section>
  )
}
