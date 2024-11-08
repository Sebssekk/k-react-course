import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './globals.css'
import { Root } from './components/ContextExample/Root'
import { ReducerCounter } from './components/ReducerCounter'
import { FocusInput } from './components/FocusInput'
import { Timer } from './components/Timer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    <Root/>
    {/* <ReducerCounter/> */}
    {/* <FocusInput/> */}
    {/* <Timer/> */}
  </React.StrictMode>,
)
