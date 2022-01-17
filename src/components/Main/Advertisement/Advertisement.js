import { useState } from "react";
import classnames from "classnames";

import "./Advertisement.less";

function Advertisement() {
    const [isDisplayed, setIsDisplayed] = useState(true)

    const advertisementClass = classnames(
        "advertisement",
        {
            "advertisement_displayed": isDisplayed,
        }
    );

    function handleCLick() {
        if (isDisplayed) {
            setIsDisplayed(false);
        } else {
            setIsDisplayed(true);
        };
    };

    return (
        <div className={advertisementClass}>
            <div className="advertisement__alignment-container">
                <p className="advertisement__text">Winter Sale: Up to -95% on our games and related products!</p>
                <button className="advertisement__button">Don't miss it!</button>
            </div>
            <button className="advertisement__close-button" onClick={handleCLick}></button>
        </div>
    )
};

export default Advertisement;
