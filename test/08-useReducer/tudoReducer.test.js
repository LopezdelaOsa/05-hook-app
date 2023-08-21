import { tudoReducer } from "../../src/08-useReducer/tudoReducer"



describe ('Pruebas en tudoReducer', () => {

    const initialState = [{
        id: 1,
        descripcion: 'Demo tudo',
        done: false
    }]

    test('Debe regresar el estado inicial', () => {

        const newState = tudoReducer(initialState, {})
        expect(newState).toBe(initialState)

    })

    test('Añadimos un nuevo tudo', () => {

        const action = {
            type: '[TUDO] Add Tudo',
            payload: {
                id: 2,
                descripcion: 'Segundo tudo',
                done: false
            }
        }

        const newState = tudoReducer(initialState, action)
        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)

    })

    test('Verificar que eliminamos un tudo', () => {

        const action = {
            type: '[TUDO] Remove Tudo',
            payload: 1
        }

        const newState = tudoReducer(initialState, action)
        expect(newState.length).toBe(0)


    })

    test('Comprobar que hace el toggle', () => {
        const action = {
            type: '[TUDO] Toggle Tudo',
            payload: 1
        }

        const newState = tudoReducer(initialState, action)
        expect(newState[0].done).toBe(true)


    })



})