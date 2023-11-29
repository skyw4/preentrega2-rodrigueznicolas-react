import NavBar from "../NavBar/NavBar";
import "./styles/header.css"


function Header() {
    return (
        <header className="header">
            <h1 className="header__title">DON JORGE</h1>
            <h2 className="header__subtitle">CORRALON Y CERAMICAS</h2>
            <NavBar />
        </header>
    )
}

export default Header