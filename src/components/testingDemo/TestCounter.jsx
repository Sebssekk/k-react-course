import React, { useState } from 'react'

export const TestCounter = () => {
  const [count, setCount] = useState(0)
  const [countMsg, setCountMsg] = useState("")
  const [displayCountMsg, setDisplayCountMsg] = useState("Count")
  return (
    <div>
        <h1>{displayCountMsg} : {count}</h1>
        <div>
            <button onClick={() => setCount((value) => value+1)}>+1</button>
            <button onClick={() => setCount((value) => value-1)}>-1</button>
        </div>
        <form onSubmit={(e) => {e.preventDefault(); setDisplayCountMsg(countMsg);setCountMsg("")}}>
            <label htmlFor="countMsg">Count Message to Display</label>
            <input type="text" name='countMsg' value={countMsg} onChange={(e)=> setCountMsg(e.currentTarget.value)}/>
            <button type="submit">Update</button>
        </form>
    </div>
  )
}
