import LogoImg from '../assets/car.png.png'
export default function cabecalho(){
return(
    <header>
        <img src={LogoImg} alt="Logo" />
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Sobre-nós</a></li>
                <li><a href="#">Carrinho</a></li>
            </ul>
        </nav>
    </header>
)
}