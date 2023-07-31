
export const TudoItem = ( {tudo, onDeleteTudo, onToggleTudo} ) => {


  return (
    <li className="list-group-item d-flex justify-content-between">
        <span
          className={`align-self-center ${ (tudo.done) ? 'text-decoration-line-through' : '' } `}
          onClick={ () => onToggleTudo(tudo.id) }
          >{tudo.descripcion}
        </span>
        <button
          className="btn btn-danger"
          onClick={ () => onDeleteTudo(tudo.id)}
        >Borrar
        </button>
    </li>
  )
}
