import React from 'react'
import ReactDOM from 'react-dom/client'
//import { HooksApp } from './HooksApp'
import './index.css'
import { BrowserRouter } from "react-router-dom";

//import { CounterApp } from './01-useState/CounterApp'
//import { CounterConCustomHook } from './01-useState/CounterConCustomHook'
// import { FormularioSimple } from './02-useEffect/FormularioSimple'
//import { FormularioConCustomHook } from './02-useEffect/FormularioConCustomHook'
import { MultipleCustomHooks } from './03-ejemplos/MultipleCustomHooks'
//import { FocoPantalla } from './04-useRef/FocoPantalla'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorizar } from './06-memos/Memorizar'
//import { MemoHook } from './06-memos/MemoHook'
//import { CallBackHook } from './06-memos/CallBackHook'
//import { Padre } from './07-tarea-memo/Padre'
//import './08-useReducer/intro-reducer'
//import { TudoApp } from './08-useReducer/TudoApp'
import { MainApp } from './09-useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>  
 //  {/*<CounterApp />*/}    {/*<CounterConCustomHook />*/}    {//<FormularioSimple />   <FormularioConCustomHook /> <MultipleCustomHooks /> <FocoPantalla /> <Layout />
 //<Memorizar /> <MemoHook />  <CallBackHook />  <Padre />
 // <TudoApp />
 //}
<BrowserRouter>
    {/* <MainApp /> */}
    <MultipleCustomHooks />
</BrowserRouter>
// </React.StrictMode>,
)
