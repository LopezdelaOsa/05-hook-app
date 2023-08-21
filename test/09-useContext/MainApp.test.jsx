import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Probando en el componente <MainApp/>', () => {

    test('Debe mostrar la página Home', () => {

        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        )

        //screen.debug()
        expect(screen.getByText('Página Home')).toBeTruthy()
    })

    test('Debe mostrar la página Login', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )

        //screen.debug()
        expect(screen.getByText('Página Login')).toBeTruthy()
    })
})