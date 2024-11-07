import React from 'react'
import { D } from './D'

export const B = ({count}) => {
  return (
    <div className='context-example border-purple-800 text-purple-800'> 
        <h1>Component B</h1>
        <D count={count}/>
    </div>
  )
}
