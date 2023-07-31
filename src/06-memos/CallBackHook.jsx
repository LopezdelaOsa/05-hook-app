import { useCallback, useState } from "react"
import { MostrarIncremento } from "./MostrarIncremento"

export const CallBackHook = () => {
    const [contar, setContar] = useState(0)
    // const incrementoF = () => {
    //     setContar(contar + 1)
    // }

    const incrementoF = useCallback(
      (valor) => {
        //setContar(contar + 1)
        setContar( (value) => value + valor ) // value aquí es propiedad de 'contar'
      },
      [],
    )
    

  return (
    <>
        <h1>useCallBack Hook: {contar}</h1>
        <hr/>

        <MostrarIncremento incremento={incrementoF} />

    </>
  )
}
