import { E } from "./E"
import { F } from "./F"
import { G } from "./G"

export const C = () => {
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
}
