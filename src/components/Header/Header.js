import MenuPopup from "./MenuPopup/MenuPopup"
import classnames from "classnames";
import { useEffect, useState } from "react"

import "./Header.less";

function Header() {
    const [pageYOffset, setPageYOffset] = useState(0);
    const [isPopupDisplayed, setIsPopupDisplayed] = useState(false)
    const [isHeaderButtonActive, setIsHeaderButtonActive] = useState(false)

    const headerLogoClass = classnames(
        "header__logo",
        {
            "header__logo_hidden": pageYOffset > 0
        }
    );

    const headerButtonClass = classnames(
        "header__menu-button",
        {
            "header__menu-button_active": isHeaderButtonActive
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

    function handleClick() {
        if (isHeaderButtonActive) {
            setIsHeaderButtonActive(false)
            setIsPopupDisplayed(false)
        } else {
            setIsHeaderButtonActive(true)
            setIsPopupDisplayed(true)
        }
    }

    return (
        <>
            <header className="header">
                <div className={headerLogoClass} />
                <div className="header__menu">
                    <button className={headerButtonClass} onClick={handleClick} />
                    <a className="header__menu-link" target="_blank" href="#">GAMES</a>
                    <a className="header__menu-link" target="_blank" href="#">STORE</a>
                    <a className="header__menu-link" target="_blank" href="#">NEWS</a>
                    <a className="header__menu-link" target="_blank" href="#">EPIC</a>
                    <a className="header__menu-link" target="_blank" href="#">SUPPORT</a>
                </div>
                <div className="header__search-menu">
                    <div className="header__search-container">
                        <input className="header__search-input" type="text" placeholder="Search"></input>
                        <button className="header__search-button"></button>
                    </div>
                    <div className="header__search-menu-button-decor header__search-menu-button-decor_first"></div>
                    <button className="header__search-menu-button"></button>
                    <div className="header__search-menu-button-decor"></div>
                    <button className="header__search-menu-button"></button>
                </div>
            </header>
            <MenuPopup isPopupDisplayed={isPopupDisplayed}/>
        </>
    )
};

export default Header;
