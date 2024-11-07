import React, { useState, useReducer, memo } from "react"
import {A} from './A'
import { B } from "./B"
import { initState, reducer } from "./reducers"

export const CountContext = React.createContext()

export const Root = memo ( () => {
  console.log("Root Component Rendering")
  //const [count,setCount] = useState(0)  
  const [state, dispatch] = useReducer(reducer,initState)
  return (
    <CountContext.Provider value={{state,dispatch}}>
    <div className="context-example" >
        Root
        <br />
        <div className="bg-gray-800 px-5 
                        py-3 rounded-md shadow-md m-5 
                        text-yellow-50">
                <p className="text-center">{state.countMsg} : {state.count}</p>
        </div>
        <div className="flex space-x-5">
            <A/>
            <B/>
        </div>
    </div>
    </CountContext.Provider>
  )
})
