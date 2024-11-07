import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './globals.css'
import { Root } from './components/ContextExample/Root'
import { ReducerCounter } from './components/ReducerCounter'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Root/> */}
    <ReducerCounter/>
  </React.StrictMode>,
)
