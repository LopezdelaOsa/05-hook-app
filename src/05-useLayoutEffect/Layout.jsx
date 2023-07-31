
import { useFetch, useContador } from "../hooks"
import { Loading } from "../03-ejemplos"
import { Citas } from "./Citas"



export const Layout = () => {


    const {contar, incremento} = useContador(1)
    
    const { data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${contar}`)


  return (
    <>
        <h1>Cosas de Rick y Morty</h1>
        <hr/>

        {
          isLoading 
          ? (<Loading />) 
          : (<Citas datos={data}/>)
        }

        <button
          className="btn btn-primary"
          disabled = {isLoading}
          onClick={ incremento }>
          Siguiente
        </button>
         
    </>    
  )
}
