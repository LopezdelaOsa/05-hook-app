import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-ejemplos"
import { useFetch } from "../../src/hooks/useFetch"
import { useContador } from "../../src/hooks/useContador"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useContador')

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncremento = jest.fn()
    useContador.mockReturnValue({
        contar: 1,
        incremento: mockIncremento
    })
    beforeEach( () => {
        jest.clearAllMocks()
    } )


    test('Debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        // Se puede hacer con snapshot, pero prefiere hacerlo de otra manera
        render(<MultipleCustomHooks/>)
        //screen.debug()
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Cosas de Rick y Morty'))

        const nextButton = screen.getByRole('button', { name: 'Siguiente'})
        //console.log(nextButton.disabled)
        expect(nextButton.disabled).toBeTruthy()
    })

    test('Esperamos ver un cita', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Raul', quote: 'Hola a todos' }],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks/>)
        screen.debug()
        expect(screen.getByText('Hola a todos - Raul')).toBeTruthy()
        // //expect(screen.getByText('Raul')).toBeTruthy()

        const nextButton = screen.getByRole('button', { name: 'Siguiente'})
        expect(nextButton.disabled).toBeFalsy()
    })

    test('Verificar la funcion incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Raul', quote: 'Hola a todos' }],
            isLoading: false,
            hasError: null
        })


        render(<MultipleCustomHooks/>)
        const nextButton = screen.getByRole('button', { name: 'Siguiente'})
        fireEvent.click(nextButton)

        expect(mockIncremento).toHaveBeenCalled()

    })

})
