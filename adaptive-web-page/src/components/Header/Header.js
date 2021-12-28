import "./Header.css"
import bandaiNamcoLogo from "../../images/bandai-namco-logo.png"

function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={bandaiNamcoLogo} alt="Лого компании 'Bandai Namco'" />
            <div className="header__menu">
                <button className="header__menu-button">GAMES</button>
                <button className="header__menu-button">STORE</button>
                <button className="header__menu-button">NEWS</button>
                <button className="header__menu-button">EPIC</button>
                <button className="header__menu-button">SUPPORT</button>
            </div>
            <div className="header__search-menu">
                <div className="header__search-container">
                    <input className="header__search-input" type="text" placeholder="Search"></input>
                    <button className="header__search-button"></button>
                </div>
                <button className="header__search-menu-button"></button>
                <div className="header__search-menu-button-decor"></div>
                <button className="header__search-menu-button"></button>
            </div>
        </header>
    )
}

export default Header
