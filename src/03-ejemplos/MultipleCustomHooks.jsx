import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

    //const { data, isLoading, hasError} = useFetch('https://rickandmortyapi.com/api/character/1')
    const {  } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes')

    //console.log (data, isLoading, hasError)

  return (
    <>
        <h1>Cosas de Breaing Bad</h1>
        <hr/>
        
    </>    
  )
}
