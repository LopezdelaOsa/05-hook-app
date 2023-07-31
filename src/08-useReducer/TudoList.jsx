import { TudoItem } from "./TudoItem"


export const TudoList = ({tudos = [], onDeleteTudo, onToggleTudo }) => {
  return (
    <ul className="list-group">
    {
        tudos.map( tudo => (
            <TudoItem
              key={tudo.id}
              tudo={tudo}
              onDeleteTudo = { id => onDeleteTudo(id)} // Funcionan igual porque al trabajar con el propio id, no lo necesita
              onToggleTudo = {onToggleTudo} // Funcionan igual porque al trabajar con el propio id, no lo necesita
            />
        ) )
    }
    </ul>
  )
}
