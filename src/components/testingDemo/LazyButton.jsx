import { useEffect, useState } from "react"
import React from "react";

export const LazyButton = () => {
  const [login,setLogin] = useState(false)

  useEffect(() => {
    setTimeout( () => {
        setLogin(true)
    }, 1500 )
  },[])
  return (
    <div>
        {login ? <button >Welcome!!</button> :
            <button>Login</button>}
    </div>
  )
}
