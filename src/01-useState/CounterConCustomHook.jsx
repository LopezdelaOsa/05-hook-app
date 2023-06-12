import { useContador } from "../hooks/useContador"

export const CounterConCustomHook = () => {

    const {contar, incremento, decremento, inicializar} = useContador()



  return (
    <>
        <h1>Contador con Hook: {contar}</h1>
        <hr/>
        <button className='btn btn-primary' onClick={incremento}>+1</button>
        <button className='btn btn-primary' onClick={inicializar}>Reset</button>
        <button className='btn btn-primary' onClick={ () => decremento(5)}>-1</button>
    </>
  )
}
