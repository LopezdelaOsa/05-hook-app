import { useMemo, useState } from "react"
import { useContador } from "../hooks/useContador"

const heavyStuff = (iteraciones = 25) => {
  for (let i = 0; i < iteraciones; i++) {
    console.log("ahí vamos... " + i)
  }
  return `Se han realizado ${iteraciones} repeticiones.`
}

export const MemoHook = () => {

    const {contar, incremento} = useContador(300)
    const [show, setShow] = useState(true)

    const valorMemoria = useMemo(() => heavyStuff(contar), [contar])

  return (
<>
    <h1>Contador: <small>{contar}</small></h1>
    <hr/>

    { valorMemoria }

    <button className="btn btn-primary" onClick={ () => incremento() }> +1 </button>

    <button className="btn btn-outline-primary" onClick={ () => setShow(!show) }>Mostrar/esconder {JSON.stringify(show)}</button>
</>
  )
}
