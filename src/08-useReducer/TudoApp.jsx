
import { TudoList } from "./TudoList"
import { TudoAdd } from "./TudoAdd"
import { useTudos } from "../hooks"


// Tarea:
// hacer un hook, useTudo, que controle: 
// tudos, handleNewTudo, handleDeleteTudo, handleToggleTudo


export const TudoApp = () => {

    const {tudos, tudosConteo, tudosPendientes, handleNewTudo, handleDeleteTudo, handleToggleTudo} = useTudos()

  return (
    <>
        <h1>Tudo App (total: {tudosConteo} / <small>pendientes: {tudosPendientes}</small> )</h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                <TudoList 
                    tudos={tudos} 
                    onDeleteTudo = { id => handleDeleteTudo(id)}
                    onToggleTudo = { handleToggleTudo }
                />
            </div>
            <div className="col-5">
           
                <h4>Agregar Tudo</h4>
                <hr/>
                 <TudoAdd onNewTudo={ handleNewTudo } />
            </div>
        </div>
 
    </>
  )
}
