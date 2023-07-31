

export const Citas = ( {datos} ) => {

//console.log(datos)

  return (
    <blockquote className="blockquote text-end" >
    {/* {JSON.stringify(datos)} */}
    {/* <p className="mb-1">{ datos.name } - { datos.origin.name }</p><br/>
    {datos.episode.map(  (epi) => 
        //console.log(epi)
        <footer key={epi} className="blockquote-footer" >{epi}</footer>
           
        )} */}
        <p className="mb-1">{ datos[0].quote } - { datos[0].author }</p><br/>
  </blockquote>
  )
}
