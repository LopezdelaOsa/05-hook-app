import { render, screen } from "@testing-library/react"
import { TudoApp } from "../../src/08-useReducer/TudoApp"
import { useTudos } from "../../src/hooks/useTudos"

jest.mock('../../src/hooks/useTudos')

describe('Pruebas en <TudoApp/>', () => {

    useTudos.mockReturnValue({
        tudos: [
            {id:1, descripcion: "La primera", done: false},
            {id:2, descripcion: "La segunda", done: true}
        ],
        tudosConteo: 2,
        tudosPendientes: 1,
        handleNewTudo: jest.fn(),
        handleDeleteTudo: jest.fn(),
        handleToggleTudo: jest.fn()
    })

    test('Debe motrar correctamente el componente', () => {

        render(<TudoApp/>)
        //screen.debug()
        expect(screen.getByText('La primera')).toBeTruthy()
        expect(screen.getByText('La segunda')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()
    })
})