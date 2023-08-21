import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from "../../src/09-useContext/LoginPage"

describe('Pruebas en el componente <LoginPage/>', () => {

    test('Debe mostar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={ { user: null }}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')

    })

    test('Llamada al setUser cuando se hacek click en el botón', () => {

        const setUserMock = jest.fn()
        
        render(
            <UserContext.Provider value={ { user: null, setUser: setUserMock }}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const boton = screen.getByRole('button')
        fireEvent.click(boton)

        expect(setUserMock).toHaveBeenCalledWith({"email": "raul@junta.es", "id": "234", "nombre": "Raul"})


    })
})