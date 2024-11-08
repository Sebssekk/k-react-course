import React, { memo, useContext, useEffect, useMemo, useState } from 'react'
import { D } from './D'
import { CountContext } from './Root'
import { VALUE_CHANGE } from './reducers'
import { useLogOnRender } from '../hooks/useLogOnRender'

export const B = memo ( () => {
  //console.log("B Component Rendering")
  useLogOnRender("B")
  const bigValue = 1000000000
  const complexLogic = useMemo( () => {
    for (let i=0; i< bigValue; i++) {
      continue
    }
    return "DONE Complex Logic"
  },[bigValue])
  
  console.log(complexLogic)

  const {state, dispatch} = useContext(CountContext)
  const [value, setValue] = useState(0)
  const handleSubmit= (e) => {
    e.preventDefault()
    dispatch({type:VALUE_CHANGE, payload: value})
  }
  return (
    <div className='context-example border-purple-800 text-purple-800'> 
        <h1>Component B</h1>
        <D/>
        <form onSubmit={(e) => {handleSubmit(e)}} className="bg-indigo-900 px-5 py-3 rounded-md shadow-md m-5 space-y-3 items-center flex flex-col text-yellow-50">
                <label htmlFor="value">+/- Value :
                 <input onChange={(e)=>{setValue(Number(e.currentTarget.value))}} className="rounded-lg bg-slate-500 text-center" id="value" type="number" />
                </label>
                <button type="submit" className="p-2 bg-pink-800 hover:bg-pink-600 max-w-36 rounded-md">Update +/- value</button>
                <h1>Curret Value: {state.incDecValue}</h1>
          </form>
    </div>
  )
})
