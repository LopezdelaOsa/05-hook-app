import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas en el compoenten <HomePage/>', () => {

    const user = {
        id: 1,
        nombre : 'Raul'
    }

    test('Mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={ { user: null } }>
                <HomePage/>
            </UserContext.Provider>
        )
        //screen.debug()
        const preTag = screen.getByLabelText('pre'); //aria-label
        //console.log(preTag.innerHTML)
        expect(preTag.innerHTML).toBe('null')
    })

    test('Mostrar el componente CON el usuario', () => {

        render(
            <UserContext.Provider value={ { user } }>
                <HomePage/>
            </UserContext.Provider>
        )
        //screen.debug()
        const preTag = screen.getByLabelText('pre'); //aria-label
        //console.log(preTag.innerHTML)
        expect(preTag.innerHTML).toContain(user.nombre)
        expect(preTag.innerHTML).toContain( `${user.id}` )

    })
})