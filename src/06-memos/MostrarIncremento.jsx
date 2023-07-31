import React from "react"

export const MostrarIncremento = React.memo ( ({incremento}) => {

    console.log("Generado de nuevo...")


  return (
        <button className="btn btn-primary" onClick={ () => {incremento( 5 )} }>
            Incrementar
        </button>
  )
} )
