import React, { useState } from 'react'

function Pagination({pageProp, goAhead, goBack}) {
 
  return (
    <>
      <div className='w-full flex justify-center mb-8'>
          <button className='border-2 p-2
                border-red-300 
                hover:scale-105 
                ease-out duration-500
                border-r-0
                font-bold
                rounded-l-xl'
                onClick={goBack}
                >Previous</button>
          <button className='border-2 p-2
                border-red-300 
                font-bold'
                >
                  {pageProp}
                </button>
          <button className='border-2 p-2
                border-red-300 
                hover:scale-105 
                ease-out duration-500
                border-l-0
                font-bold
                rounded-r-xl'
                onClick={goAhead}
          >Next</button>
      </div>
    </>
  )
}

export default Pagination