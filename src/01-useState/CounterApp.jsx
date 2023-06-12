import { useState } from "react"

export const CounterApp = () => {

    //const [contador, setContador] = useState({
    const [contador, setContador] = useState({
        contar1: 10,
        contar2: 20,
        contar3: 30,
    })
    const {contar1, contar2, contar3} = contador
    

  return (
    <>
    <h1>Contador A: {contar1}</h1>
    <h1>Contador B: {contar2}</h1>
    <h1>Contador C: {contar3}</h1>
    <hr/>
    <button className="btn" onClick={ () => setContador({
        ...contador,
        contar1: contar1 + 1,
    }) }>+1 A</button>
        <button className="btn" onClick={ () => setContador({
        ...contador,
        contar2: contar2 + 1,
    }) }>+1 B</button>
        <button className="btn" onClick={ () => setContador({
        ...contador,
        contar3: contar3 + 1,
    }) }>+1 C</button>
    </>

  )
}
