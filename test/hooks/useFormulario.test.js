import { act, renderHook } from "@testing-library/react"
import { useFormulario } from "../../src/hooks/useFormulario"

describe('Pruebas en useFormulario', ( ) => {

    const formularioInicial = {
        name: 'Raul',
        email: 'raul@j.es'
    }

    test('Debe regresar los valores por defecto', () => {

        const { result } = renderHook( () => useFormulario(formularioInicial) )
        //console.log(result.current)
        expect(result.current).toEqual({
            name: formularioInicial.name,
            email: formularioInicial.email,
            estadoFormulario: formularioInicial,
            alCambiar: expect.any(Function),
            onReseteoFormulario: expect.any(Function),

        })
    })

    test('Cambiamos el valor del name del formulario', () => {
        const nuevoNombre = 'Brann'

        const { result } = renderHook( () => useFormulario(formularioInicial) )
        const {alCambiar} = result.current

        // alCambiar // act() // event...
        act( () => {
            alCambiar( { target: {name: 'name', value: nuevoNombre} } )
        })
        

        // expect result.current.name ===
        expect(result.current.name).toBe === nuevoNombre
        // expect result.current.estadoFormulario ===
        expect(result.current.estadoFormulario.name).toBe(nuevoNombre)
    })

    test('Volvemos al valor inicial del formulario', () => {
        const nuevoNombre = 'Brann'

        const { result } = renderHook( () => useFormulario(formularioInicial) )
        const {alCambiar, onReseteoFormulario} = result.current

        // alCambiar // act() // event...
        act( () => {
            alCambiar( { target: {name: 'name', value: nuevoNombre} } )
            //alCambiar( { target: {formularioInicial} } )
            onReseteoFormulario()
        })
        

        // expect result.current.name ===
        expect(result.current.name).toBe(formularioInicial.name)
        // expect result.current.estadoFormulario ===
        expect(result.current.estadoFormulario.name).toBe(formularioInicial.name)
    })

})