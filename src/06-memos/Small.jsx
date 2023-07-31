//import {memo} from 'react'
import React from 'react'
//export const Small = memo ( ({valor}) => {
export const Small = React.memo ( ({valor}) => {

    console.log('Volví a dibujarme')


  return (
    <small>{valor}</small>
  )
} )
