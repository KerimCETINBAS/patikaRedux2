import React from 'react'
import ButtonCSS from "../misc/modules/thing.button.module.css"
import { getIsTradable } from '../redux/selectors'
import { useDispatch } from 'react-redux'
import { buyItemAction, sellItemAction } from '../redux'
export default function item({item}) {
   
    const dispatch = useDispatch()
    const tradable = getIsTradable(item.id)

    return (
        <div className='w-full  bg-white p-6'>

            {
                // resim
            }
            <figure className='h-32 '>
                <img className='h-full w-full  object-contain' src={item.img} alt="" />
            </figure>     

            {
                // şseyin adı
            }
            <span className='block text-center w-full p-2'> {item.name} </span>

            {
                //seyin fiyati
            }
            <strong className='block text-center w-full p-2'> {item.price} $ </strong>
         
            <div className='flex justify-between'>
                {
                    // satis butonu 
                }
                <button
                    onClick={()=>dispatch(sellItemAction(item.id))}
                    className={
                        'px-3 py-1 bg-gray-500 ' + ButtonCSS[`sell-btn-${tradable.sellable ? "active" : "inactive"}`]}
                    disabled={!tradable.sellable}>  SELL  </button>
                
                {
                    //  kac adet alindi
                }
                <span className='font-semibold text-lg'> {item.amount} </span>

                {
                    //  satin alma butonu
                }
                <button
                    onClick={()=>dispatch(buyItemAction(item.id))}
                    className={
                        'px-3 py-1 bg-gray-500 '
                        + ButtonCSS[`buy-btn-${tradable.buyable ?
                            "active" :
                            "inactive"}`]}
                    disabled={!tradable.buyable}>Buy</button>
            </div>
        </div> 
    )
}
