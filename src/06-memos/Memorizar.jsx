import { useState } from "react"
import { useContador } from "../hooks/useContador"
import { Small } from "./Small"


export const Memorizar = () => {

    const {contar, incremento} = useContador(0)
    const [show, setShow] = useState(true)

  return (
<>
    <h1>Contador: <Small valor={contar} /></h1>
    <hr/>
    <button className="btn btn-primary" onClick={ () => incremento() }> +1 </button>

    <button className="btn btn-outline-primary" onClick={ () => setShow(!show) }>Mostrar/esconder {JSON.stringify(show)}</button>
</>
  )
}
