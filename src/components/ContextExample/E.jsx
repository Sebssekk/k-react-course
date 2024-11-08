import { memo, useCallback, useState } from "react"
import { Counter } from "../Counter"
import { CounterButtons } from "./CounterButtons"
import { CounterTitle } from "./CounterTitle"

export const E = memo(() => {
  console.log("E Component Rendering")
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment1 = useCallback( () => {
    setCount1(prevState => prevState+1)
  }, [count1])
  const decrement1 = useCallback( () => {
    setCount1(prevState => prevState-1)
  }, [count1])
  const increment2 = useCallback( () => {
    setCount2(prevState => prevState+1)
  }, [count2])
  const decrement2 = useCallback( () => {
    setCount2(prevState => prevState-1)
  }, [count2])
  return (
    <div className="context-example border-yellow-500 text-yellow-500">
        <h1>Component E</h1>
        <div>
          <CounterTitle text="Counter 1" count={count1}/>
          <CounterButtons increment={increment1} 
                      decrement={decrement1} 
                      text={"Counter 1"}/>
        </div>
        <div>
          <CounterTitle text="Counter 2" count={count2}/>
          <CounterButtons increment={increment2} 
                      decrement={decrement2} 
                      text={"Counter 2"}/>
        </div>
    </div>
  )
})
