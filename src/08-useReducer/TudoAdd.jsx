import { useFormulario } from "../hooks/useFormulario"

export const TudoAdd = ( {onNewTudo} ) => {

    const {descripcion, alCambiar, onReseteoFormulario} = useFormulario({
        descripcion: ''
    })

    const alEnviarFormulario = (event) => {
        event.preventDefault()
        if (descripcion.length <= 1) return

        const newTudo = {
            id: new Date().getTime(),
            descripcion: descripcion,
            done: false,

        }

        onNewTudo(newTudo)
        onReseteoFormulario()

    }


  return (
    <form onSubmit={alEnviarFormulario}>
        <input type="text" placeholder="Tarea por hacer" className="form-control"
            name="descripcion"
            value={descripcion}
            onChange={alCambiar} /> 
        <button type="submit" className="btn btn-outline-primary mt-1">
            Agregar
        </button>

    </form>
  )
}
