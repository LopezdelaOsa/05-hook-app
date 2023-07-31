import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-ejemplos"
import { useFetch } from "../../src/hooks/useFetch"

jest.mock('../../src/hooks/useFetch')

describe('Pruebas en <MultipleCustomHooks />', () => {


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

    test('Esperamos ver un <i>cita</i>', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Raul', quote: 'Hola a todos' }],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks/>)
        //screen.debug()
        expect(screen.getByText('H')).toBeTruthy()
        //expect(screen.getByText('Raul')).toBeTruthy()
    })

})
