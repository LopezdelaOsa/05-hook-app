import React from 'react'
import ReactDOM from 'react-dom/client'
//import { HooksApp } from './HooksApp'
import './index.css'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterConCustomHook } from './01-useState/CounterConCustomHook'
// import { FormularioSimple } from './02-useEffect/FormularioSimple'
//import { FormularioConCustomHook } from './02-useEffect/FormularioConCustomHook'
import { MultipleCustomHooks } from './03-ejemplos/MultipleCustomHooks'


ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>    {/*<CounterApp />*/}    {/*<CounterConCustomHook />*/}    <FormularioSimple />   <FormularioConCustomHook />
 <MultipleCustomHooks />
 // </React.StrictMode>,
)
