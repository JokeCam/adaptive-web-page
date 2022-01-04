import "./Header.less"
import { useState, useEffect } from "react"
import Classnames from "classnames"

function Header(props) {
    const [displayLogo, setDisplayLogo] = useState(true)

    const headerLogoClass = Classnames({
        "header__logo": true,
        "header__logo_hidden": !displayLogo
    })
    
    useEffect(() => {
        if (props.pageYOffset > 0) {
            setDisplayLogo(false)
        } else {
            setDisplayLogo(true)
        }
    }, [props.pageYOffset])

    return (
        <header className="header">
            <div className={headerLogoClass} />
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
