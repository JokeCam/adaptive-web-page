import classnames from "classnames";
import { useEffect, useState } from "react"

import "./Header.less";

function Header() {
    const [pageYOffset, setPageYOffset] = useState(0);
    const headerLogoClass = classnames(
        "header__logo",
        {
            "header__logo_hidden": pageYOffset > 0
        }
    );

    useEffect(() => {
        window.addEventListener("scroll", windowScrollListener);

        return () => {
            window.removeEventListener("scroll", windowScrollListener);
        };

    }, []);

    function windowScrollListener() {
        setPageYOffset(window.pageYOffset);
    };

    return (
        <header className="header">
            <div className={headerLogoClass}/>
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
};

export default Header;
