import { useRef } from "react"

export const FocoPantalla = () => {

    // const inputRef1 = useRef()
    // const inputRef2 = useRef()
    const inputRef = useRef()

    const pulsar = () => {
        //document.querySelector('input').select()
        inputRef.current.select()
    }

  return (
    <>
        <h1>Foco Pantalla</h1>
        <hr/>
        <input
            ref={inputRef}
            className="form-control"
            type="text"
            placeholder="Ponga su nombre"/>
        <button
            onClick={pulsar}
            className="btn btn-primary mt-2">
            Focalizar
        </button>
    </>
  )
}
