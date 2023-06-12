import { useState } from "react"

export const useContador = ( valorInicial = 0) => {

    const [contar, setContar] = useState(valorInicial)

    const incremento = ( event, valor = 5) => {
        setContar (contar + valor)
    }

    const decremento = (valor) => {
        if (contar === 0 ) return
        setContar (contar - valor)
    }

    const inicializar = () => {
        setContar (valorInicial)
    }


    return {
        contar: contar,
        incremento,
        decremento,
        inicializar
        
    }
}