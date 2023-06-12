
import { useFormulario } from "../hooks/useFormulario"


export const FormularioConCustomHook = () => {

    const {estadoFormulario, alCambiar, usuario, email, password, onReseteoFormulario} =  useFormulario ({
        usuario: '',
        email: '',
        password: ''
    })

    //const {usuario, email, password} = estadoFormulario  // No es necesario esta linea ya que en el useFormulario hemos desestruturado con ...estadoFormulario

    

  return (
    <>
        <h1>Formulario con Custom Hook</h1>
        <hr/>
        <input type="text" className="form-control" placeholder="Usuario" name="usuario" value={usuario} onChange={alCambiar}/>
        <input type="email" className="form-control mt-2" placeholder="direccion@correo" name="email" value={email} onChange={alCambiar}/>
        <input type="password" className="form-control mt-2" placeholder="contraseña" name="password" value={password} onChange={alCambiar}/>

        <button onClick={ onReseteoFormulario } className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
