import { useState } from "react"
import classnames from "classnames"

import "./Popup.less"

function Popup() {
    const [isPopupDisplayed, setIsPopupDisplayed] = useState(true)

    const popupClass = classnames(
        "popup",
        {
            "popup_open": isPopupDisplayed
        }
    )

    function onClick() {
        setIsPopupDisplayed(false)
    }

    return (
        <div className={popupClass} onClick={onClick}>
            <div className="popup__container">
                <p className="popup__text">Please confirm that you are over 16 years old to continue</p>
                <div className="popup__buttons">
                    <button className="popup__button" onClick={onClick}>Yes</button>
                    <button className="popup__button" onClick={onClick}>No</button>
                </div>
            </div>
        </div>
    )
}

export default Popup
