import { C } from "./C"

export const A = () => {
  console.log("A Component Rendering")
  return (
    <div className="context-example flex-col 
                border-purple-800 
                text-purple-800">
        <h1>Component A</h1>
        <C/>
    </div>
  )
}
