import { memo } from "react"
import { C } from "./C"
import { useLogOnRender } from "../hooks/useLogOnRender"

export const A = memo ( () => {
  //console.log("A Component Rendering")
  useLogOnRender("A")
  return (
    <div className="context-example flex-col 
                border-purple-800 
                text-purple-800">
        <h1>Component A</h1>
        <C/>
    </div>
  )
}
)
