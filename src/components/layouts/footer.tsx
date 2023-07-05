import React from 'react'

export default function Footer() {
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-center pl-8  border-t border-slate-600 w-full '>
      <p className='pt-4'>Copyright © 2022 Dine Market</p>
      <p className='pt-4'>Design by. 
        <span className='font-bold'>Weird Design Studio </span>
      </p>
      <p className='pt-4'>Code by. 
        <span className='font-bold'> shabrina12 on github</span>
      </p>
    </div>
  )
}
