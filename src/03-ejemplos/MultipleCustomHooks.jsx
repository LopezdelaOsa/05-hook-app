//import { useFetch } from '../hooks/useFetch'
//import { useContador } from '../hooks/useContador'
import { useFetch, useContador } from "../hooks"
import { Citas, Loading } from "./"


export const MultipleCustomHooks = () => {


    const {contar, incremento} = useContador(1)
    
    //const { data, isLoading, hasError} = useFetch('https://rickandmortyapi.com/api/character/1')
    //const { data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${contar}`)
    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes')

    //console.log (data, isLoading, hasError)

    // if (isLoading) {
    //   return (
    //     <h1>Cargando...</h1>
    //   )
    // }

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
