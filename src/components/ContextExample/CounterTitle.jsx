import React, { memo } from 'react'

export const CounterTitle = memo (({text,count}) => {
  console.log(`********* ${text} title RENDERED**************`)
  return (
    <h1>{text} : {count}</h1>
  )
})
