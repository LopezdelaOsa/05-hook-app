import { act, renderHook } from "@testing-library/react"
import { useContador } from "../../src/hooks/useContador"

describe ('Pruebas en el useContador', ( ) => {

    test (('Debe devolver los valores por defecto'), () => {
        
        const {result} = renderHook( () => useContador() )
        //console.log(result)
        const {contar, incremento, decremento, inicializar} = result.current

        expect(contar).toBe(0)
        expect(incremento).toEqual( expect.any(Function) )
        expect(decremento).toEqual( expect.any(Function) )
        expect(inicializar).toEqual( expect.any(Function) )

    } )

    test ('Debe generar el contador con el valor de 100', () => {
        const {result} = renderHook( () => useContador(100) )
        //const {contar, incremento, decremento, inicializar} = result.current
        expect(result.current.contar).toBe(100)
    })

    test('Se espera que incremente el contador', () => {
        const {result} = renderHook( () => useContador(50) )
        const {contar, incremento} = result.current

        // incremento()
        // expect(contar).toBe(51)
        // Lo de arriba no ha funcionado porque se está haciendo un test a un componente que modifica un estado (useState)
        // Para que funcione hay que envolverlo (warp) en un act(...)
        act( () => {
            incremento()
            incremento(3)
        } )
        expect(result.current.contar).toBe(54)

    })

    test('Ahora decrementamos el contador', () => {
        const {result} = renderHook( () => useContador(75) )
        const {contar, decremento} = result.current

        act( () => {
            decremento()
            decremento(3)
        } )
        expect(result.current.contar).toBe(71)

    })

    test('Funciona resetear el contador', () => {
        const {result} = renderHook( () => useContador(66) )
        const {contar, incremento, inicializar} = result.current

        act( () => {
            incremento()
            inicializar()
        } )
        expect(result.current.contar).toBe(66)

    })

} )