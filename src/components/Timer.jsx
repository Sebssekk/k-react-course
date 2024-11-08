import React, { useEffect, useRef, useState } from 'react'

export const Timer = () => {
  const [timer, setTimer] = useState(0)
  const interval = useRef(null)
  useEffect(() => {
    interval.current = setInterval(()=>{
        setTimer((prev)=>prev+1)
    },1000)

    return () => {
        clearInterval(interval.current)
    }
  },[])

  const handleClick = () => {
    clearInterval(interval.current)
    console.log(`Intervale CLEARED --- stopped at: ${timer}`)
  }
  return (
    <div className="bg-gray-800 px-5 
                    py-3 rounded-md shadow-md m-5 
                    text-yellow-50">
        <p className="text-center">{timer}</p>
        <button className="bg-gray-700 px-5 py-2 rounded-md shadow-md 
                           hover:bg-gray-600" 
            onClick={handleClick}>Stop</button>
    </div>
  )
}
