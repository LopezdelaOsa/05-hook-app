import { useEffect, useState } from "react"

export const Mensaje = () => {

  const [coordenadas, setCoordenadas] = useState( {x:0, y:0} )

useEffect(() => {
  //console.log('Mensaje montado.')
  
  //const alMoverRaton = (event) => {
    const alMoverRaton = ( {x, y} ) => {
    //const coordenadas = {x, y}
    setCoordenadas({x, y})
    //console.log(coordenadas)
  }


  window.addEventListener( 'mousemove', alMoverRaton )

  return () => {
    //console.log('Desmontado.')
    window.removeEventListener( 'mousemove', alMoverRaton )
  }
}, [])


  return (
    <>
        <h3>El usuario ya existe</h3>        
        { JSON.stringify(coordenadas) }
    </>
  )
}
