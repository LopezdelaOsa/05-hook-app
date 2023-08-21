import { fireEvent, render, screen } from "@testing-library/react"
import { TudoItem } from "../../src/08-useReducer/TudoItem"


describe('Pruebas en <TudoItem/>', () => {

    const tudo = {
        id: 1,
        descripcion: 'Montar en un dragón',
        done: false
    }

    const onDeleteTudoMock = jest.fn()
    const onToggleTudoMock = jest.fn()

    beforeEach ( () => jest.clearAllMocks() )

    test('Debe mostrar el Tudo pendiente de hacer', () => {

        render( <TudoItem tudo={tudo} onDeleteTudo={onDeleteTudoMock} onToggleTudo={onToggleTudoMock} /> )

        const liElement = screen.getByRole('listitem')
        //console.log(liElement.innerHTML)
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')

    })

    test('Debe mostrar el Tudo ya hecho', () => {

        tudo.done = true

        render( <TudoItem tudo={tudo} onDeleteTudo={onDeleteTudoMock} onToggleTudo={onToggleTudoMock} /> )

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')

    })

    test('Span debe llamar a onToggleTudo cuando se hace click', () => {

        render( <TudoItem tudo={tudo} onDeleteTudo={onDeleteTudoMock} onToggleTudo={onToggleTudoMock} /> )

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)

        expect(onToggleTudoMock).toHaveBeenCalledWith(tudo.id)
    })

    test('Button debe llamar a onDeleteTudo', () => {

        render( <TudoItem tudo={tudo} onDeleteTudo={onDeleteTudoMock} onToggleTudo={onToggleTudoMock} /> )

        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)

        expect(onDeleteTudoMock).toHaveBeenCalledWith(tudo.id)
    })
})