import "./Popup.css"
import { useState, useEffect } from "react"
import Classnames from "classnames"

function Popup() {
    const [displayPopup, setDisplayPopup] = useState(true)

    const popupClass = Classnames({
        "popup": true,
        "popup_open": displayPopup
    })

    function closePopup() {
        setDisplayPopup(false)
    }

    return (
        <div className={popupClass} onClick={closePopup}>
            <div className="popup__container">
                <p className="popup__text">Please confirm that you are over 16 years old to continue</p>
                <div className="popup__buttons">
                    <button className="popup__button" onClick={closePopup}>Yes</button>
                    <button className="popup__button" onClick={closePopup}>No</button>
                </div>
            </div>
        </div>
    )
}

export default Popup
