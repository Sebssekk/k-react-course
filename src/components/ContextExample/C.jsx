import { memo } from "react"
import { E } from "./E"
import { F } from "./F"
import { G } from "./G"
import { useLogOnRender } from "../hooks/useLogOnRender"

export const C = memo ( () => {
  //console.log("C Component Rendering")
  useLogOnRender("C")
  return (
    <div className="flex-col context-example 
                border-green-800 
                text-green-800">
        <h1>Component C</h1>
        <div className="flex space-x-3">
        <E/>
        <F/>
        <G/> 
        </div>
    </div>
  )
})
