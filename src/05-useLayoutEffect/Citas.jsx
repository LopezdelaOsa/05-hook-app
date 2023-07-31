import { useLayoutEffect, useRef, useState } from "react"


export const Citas = ( {datos} ) => {

  const pRef = useRef()
  const [tamanoCaja, setTamanoCaja] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    //console.log(pRef.current.getBoundingClientRect())
    const { width, height } = pRef.current.getBoundingClientRect()
    setTamanoCaja( { width, height } )
  
  }, [datos])

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
      <p ref={ pRef } className="mb-1">{ datos.name } - { datos.origin.name }</p><br/>
      {datos.episode.map(  (epi) => 
          //console.log(epi)
          <footer key={epi} className="blockquote-footer" >{epi}</footer>
            
          )}
      </blockquote>
        <code>
          { JSON.stringify(tamanoCaja) }
        </code>
    </>

  )
}
