import React from 'react'
import { useState } from 'react'

import AnimatedNumbers from 'react-animated-numbers'
import { getMoney } from '../redux/selectors'

export default function section() {


  return (
    <section className=' bg-green-500  h-52 flex justify-center items-center'>
         <h2 className='text-6xl font-extrabold flex items-center justify-center h-full text-white'>$</h2>
         <AnimatedNumbers
            includeComma
            animateToNumber={getMoney()}
            fontStyle={{ fontSize: "4rem", color: "white", fontWeight: "500" }}
            
            configs={[
              { mass: 1, tension: 220, friction: 100, key: 1 },
              { mass: 1, tension: 180, friction: 130,  key: 2 },
              { mass: 1, tension: 280, friction: 90,  key: 3 },
              { mass: 1, tension: 180, friction: 135 },
              { mass: 1, tension: 260, friction: 100 },
              { mass: 1, tension: 210, friction: 180 },
            ]}
          ></AnimatedNumbers>
        
    </section>
  )
}
