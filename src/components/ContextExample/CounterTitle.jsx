import React, { memo } from 'react'
import { useLogOnRender } from '../hooks/useLogOnRender'

export const CounterTitle = memo (({text,count}) => {
  //console.log(`********* ${text} title RENDERED**************`)
  useLogOnRender("CounterTitle")
  return (
    <h1>{text} : {count}</h1>
  )
})
