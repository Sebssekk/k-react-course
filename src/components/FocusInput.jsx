import React, { useEffect, useRef, useState } from 'react'

export const FocusInput = () => {
  const [value, setValue] = useState("Initial Value")
  const toFocus = useRef(null)
  useEffect(() => {
    toFocus.current.focus()
  },[])
  useEffect(()=> {
    console.log(`Initial Value : ${toFocus.current.value}`)
  },[value])
  return (
    <div className='flex items-center justify-center'>
        <label htmlFor='input' className='flex flex-col space-y-2 justify-start'>
            <h1 className='font-bold text-xl'>
                This input is focused on Load
            </h1>
            <input ref={toFocus} id='input' 
                type="text" 
                className='rounded-md bg-slate-600' 
                value={value}
                onChange={() => setValue(toFocus.current.value)}/>
        </label>

    </div>
  )
}
