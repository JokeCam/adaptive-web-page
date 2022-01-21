import classnames from "classnames";

import "./MenuPopup.less";

function MenuPopup(props) {
    const menuPopupClass = classnames(
        "menu-popup",
        {
            "menu-popup_displayed": props.isPopupDisplayed,
            "menu-popup_hidden": !props.isPopupDisplayed,
        }
    );

    return (
        <div className={menuPopupClass}>
            <form className="menu-popup__form">
                <input className="menu-popup__input" placeholder="Search"></input>
                <button className="menu-popup__search-button" type="submit"></button>
            </form>
            <button className="menu-popup__button">Games</button>
            <button className="menu-popup__button">Store</button>
            <button className="menu-popup__button">News</button>
            <button className="menu-popup__button">Ep!c</button>
            <button className="menu-popup__button">Support</button>
        </div>
    );
};

export default MenuPopup;

