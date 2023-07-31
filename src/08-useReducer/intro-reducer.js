
const intialState = [ {
    id: 1,
    tudu: 'Encontrar la paravela',
    done: false,
}]

const tuduReducer = ( state = intialState, action = {} ) => {

    if (action.type  === '[TUDU] add tudu')
        return [...state, action.payload]


    return state

}


let tudus = tuduReducer()

const newTudu = {
    id: 2,
    tudu: 'Buscar kologs',
    done: false

}

const addTuduAction = {
    type: '[TUDU] add tudu',
    payload: newTudu,
}

tudus = tuduReducer (tudus, addTuduAction)

console.log(tudus)

