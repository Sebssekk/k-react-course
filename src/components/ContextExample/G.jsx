import { memo, useContext } from "react"
import { CountContext } from "./Root"
import { SUB } from "./reducers"
import { useLogOnRender } from "../hooks/useLogOnRender"
import React from "react"

export const G = memo(() => {
    //console.log("G Component Rendering")
    useLogOnRender("G")
    const {dispatch} = useContext(CountContext)
    return (
      <div className="context-example border-yellow-500 text-yellow-500">
         <h1>Component G</h1>
          <button className="bg-gray-700 px-5 py-2 rounded-md 
                            shadow-md hover:bg-gray-600 text-yellow-50" 
                onClick={() => dispatch({type: SUB})}>
                    -
          </button>
      </div>
    )
  }
)