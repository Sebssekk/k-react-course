import React, {useReducer, useState } from 'react'

export const reducerCounterInitState = {
    count: 0,
    msg: "Default message",
    value: 1
}

export const reducerCounterReducer = (state,action) => {
    switch(action.type){
        case 'add': 
            return {
                ...state,
                count: state.count + state.value,
            };    
        case 'sub':
            return {
                ...state,
                count: state.count - state.value,
            };
        case 'msgChange':
            return {
                ...state,
                msg: action.payload
            }  
            case 'valueChange':
                return {
                    ...state,
                    value: action.payload
                }
        default:
            return state;
    }
}

export const ReducerCounter = () => {
  const [counterState,dispatch] = useReducer(reducerCounterReducer,reducerCounterInitState)
  
  const [counterValue, setCounterValue] = useState(1)
  const [msg, setmsg] = useState('')
  
  const handleClick = (sign) => {
    switch (sign){
        case '+': 
            dispatch({type: 'add'});
            break;
        case '-': {
            dispatch({type: 'sub'})
            break
        }
    }
  }
  return (
    <div className="bg-gray-800 px-5 py-3 rounded-md shadow-md m-5 flex flex-col items-center justify-center">
        <p className="text-center">Count : {counterState.count}</p>
        <div className="flex gap-2">
            <h1>{counterState.msg}</h1>
            <button className={` px-5 py-2 rounded-md 
                                shadow-md hover:bg-gray-600 
                                ${counterState.loading? 'bg-red-500' : 'bg-gray-700'}`}
                 onClick={() => handleClick('+')}>
                    +</button>
            <button className={`bg-gray-700 px-5 py-2 rounded-md 
                                shadow-md hover:bg-gray-600 
                                ${counterState.loading? 'disabled' : ''}`}
                onClick={() => handleClick('-')}>-</button>
        </div>
        <form onSubmit={(e) => {
            e.preventDefault()
            dispatch({type:'msgChange',payload:msg})
        }}>
            <label htmlFor="msg">Counter Message</label>
            <input id='msg' type="text" onChange={e=>setmsg(e.currentTarget.value)}/>
            <button type='submit'>Change MSG</button>
        </form>
        <form onSubmit={(e) => {
            e.preventDefault()
            dispatch({type:'valueChange',payload:counterValue})
        }}>
            <label htmlFor="value">Counter +/- Value</label>
            <input id='value' type="number" onChange={e=>setCounterValue(Number(e.currentTarget.value))}/>
            <button type='submit'>Change +/- value</button>
        </form>
    </div>
   )
}
