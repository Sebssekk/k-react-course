import { useContext } from "react"
import { CountContext } from "./Root"

export const D = () => {
    const {count} = useContext(CountContext)
    return (
      <div className="context-example border-teal-400 text-teal-400">
          <h1>Component D</h1>
          <div className="bg-gray-800 px-5 py-3 rounded-md shadow-md m-5 text-yellow-50">
                <p className="text-center">Count : {count}</p>
          </div>
      </div>
    )
  }
  