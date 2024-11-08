import React, { memo } from 'react'
import { useLogOnRender } from '../hooks/useLogOnRender'

export const CounterButtons = memo (({increment,decrement,text}) => {
    //console.log(`***Counter buttonm -${text}- rendered***`)
    useLogOnRender("CounterButtons")
  return (
    <div className="bg-gray-800 px-5 py-3 rounded-md shadow-md m-5">
        <div className="flex gap-2">
            <button className="bg-gray-700 px-5 py-2 rounded-md 
                                shadow-md hover:bg-gray-600" 
                onClick={increment}>+1</button>
            <button className="bg-gray-700 px-5 py-2 rounded-md shadow-md 
                               hover:bg-gray-600" 
                onClick={decrement}>-1</button>
        </div>
    </div>
  )
})
