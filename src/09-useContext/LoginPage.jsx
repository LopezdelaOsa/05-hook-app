import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  //const algo = useContext( UserContext )
  //console.log(algo)
  // const {hola, user} = useContext (UserContext)
  // console.log(hola, user)
  const {user, setUser} = useContext(UserContext)


    return (
      <>
          <h1>Página Login</h1>
          <hr/>
          <pre>
            {JSON.stringify ( user, null, 4 )}
          </pre>
          <button
            className="btn btn-primary"
            onClick={ () => setUser({id: '234', nombre: 'Raul', email: 'raul@junta.es'}) }>
            Establecer usuario
          </button>
      </>
    )
  }