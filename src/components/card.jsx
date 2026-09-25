import '../style/card.css'

function Card(props) {
    return(
        <div className='card-produtos'>
            <h2 className='card-titulo'>{props.titulo}</h2>
            <img className='card-img' src={props.imagem} alt={props.titulo} />
            <p className='card-descricao'>{props.descricao}</p>
            <p className='card-preco'>{props.preco}</p>
            <a className='btn-card' href="#">Comprar</a>
        </div>
    )
}
export default Card