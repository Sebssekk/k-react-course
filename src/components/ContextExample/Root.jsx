import React, { useState } from "react"
import {A} from './A'
import { B } from "./B"

export const CountContext = React.createContext()

export const Root = () => {
    const [count,setCount] = useState(0)
  return (
    <CountContext.Provider value={{count,setCount}}>
    <div className="context-example" >
        Root
        <br />
        <div className="bg-gray-800 px-5 
                        py-3 rounded-md shadow-md m-5 
                        text-yellow-50">
                <p className="text-center">Count : {count}</p>
        </div>
        <div className="flex space-x-5">
            <A/>
            <B/>
        </div>
    </div>
    </CountContext.Provider>
  )
}
