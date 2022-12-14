
import './style.css'

const Card = (props) => {

    return(

        <div id='card' className={props.corPadrao ? "card-modo-escuro" : "card-modo-claro"}>
            <p className='primeiroParagrafo'>{props.mes}</p>
            <h4>{props.titulo}</h4>
            <p className='segundoParagrafo'>{props.subtitulo}</p>
            <p>{props.informacao}</p>
        </div>
    )
}

export default Card;