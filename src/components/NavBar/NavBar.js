import CartWidget from "../CartWidget/CartWidget"
import "./styles/navBar.css"

function NavBar() {


    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#">Construcción</a></li>
                <li className="nav__item"><a href="#">Ceramicas</a></li>
                <li className="nav__item"><a href="#">Muebles</a></li>
                <li className="nav__item"><a href="#">Contacto</a></li>
                <li className="nav__item"><a href="#">Recomendaciones</a></li>
            </ul>
            <CartWidget/>
        </nav>

    )
}


export default NavBar