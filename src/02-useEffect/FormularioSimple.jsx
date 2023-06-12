import { useEffect, useState } from "react"
import { Mensaje } from "./Mensaje"


export const FormularioSimple = () => {

    const [estadoFormulario, setEstadoFormulario] = useState({
        usuario: 'Usuario',
        email: 'direccion@correo'
    })

    const {usuario, email} = estadoFormulario

    const alCambiar = ({target}) => {
        //console.log(event.target.value)
        const {name, value} = target
        setEstadoFormulario({
            ...estadoFormulario,
            [name]: value
        })
    }

    useEffect( () => {
        //console.log('Entra en useEffect')
    }, [] )

    useEffect( () => {
        //console.log('Cambio en el estado del formulario')
    }, [estadoFormulario] )

    useEffect( () => {
        //console.log('Cambió el e-mail')
    }, [email] )

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr/>
        <input type="text" className="form-control" placeholder="Usuario" name="usuario" value={usuario} onChange={alCambiar}/>
        <input type="email" className="form-control mt-2" placeholder="direccion@correo" name="email" value={email} onChange={alCambiar}/>

        {
            (usuario === 'existe') && <Mensaje />
        }

    </>
  )
}
