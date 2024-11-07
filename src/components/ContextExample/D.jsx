import { memo, useContext, useState } from "react"
import { CountContext } from "./Root"
import { MSG_CHANGE } from "./reducers"

export const D = memo (() => {
    console.log("D Component Rendering")
    const {dispatch} = useContext(CountContext)
    const [msg, setMsg] = useState('')
    const handleSubmit=(e) => {
      e.preventDefault()
      dispatch({type: MSG_CHANGE, payload: msg})
    } 
    return (
      <div className="context-example border-teal-400 text-teal-400">
          <h1>Component D</h1>
          <form onSubmit={(e) => {handleSubmit(e)}} className="bg-gray-800 px-5 py-3 rounded-md shadow-md m-5 space-y-3 items-center flex flex-col text-yellow-50">
                <label htmlFor="msg">Count Message :
                 <input onChange={(e)=>{setMsg(e.currentTarget.value)}} className="rounded-lg bg-slate-500 text-center" id="msg" type="text" />
                </label>
                <button type="submit" className="p-2 bg-teal-900 hover:bg-teal-700 max-w-36 rounded-md">Update msg</button>
          </form>
      </div>
    )
  })
  