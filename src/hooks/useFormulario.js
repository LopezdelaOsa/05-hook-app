import { useState } from "react"

export const useFormulario = ( FormularioInicial = { }) => {

    const [estadoFormulario, setEstadoFormulario] = useState( FormularioInicial )

    const alCambiar = ({target}) => {
        //console.log(event.target.value)
        const {name, value} = target
        setEstadoFormulario({
            ...estadoFormulario,
            [name]: value
        })
    }

    const onReseteoFormulario = () => {
        setEstadoFormulario ( FormularioInicial )

    }


    return {
        ...estadoFormulario,
        estadoFormulario,
        alCambiar,
        onReseteoFormulario

    }
    
}
