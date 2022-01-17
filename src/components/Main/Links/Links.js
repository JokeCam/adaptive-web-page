import { useState, useEffect } from "react"
import classnames from "classnames"

import merchImageOrange from "../../../images/links-merch-orange.png"
import merchImagePurple from "../../../images/links-merch-purple.png"
import bandaiNamcoStore from "../../../images/bandai-namco-store.png"
import bandaiNamcoEpic from "../../../images/bandai-namco-epic.png"
import "./Links.less"

function Links() {
    const [pageYOffset, setPageYOffset] = useState(0);

    const linksMerchContainerClass = classnames(
        "links__merch-container",
        {
            "links__merch-container_slide-in": pageYOffset > 2300
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
        <section className="links">
            <div className="links__learn-more-container">
                <div className="links__alignment-container"></div>
                <h3 className="links__title links__title_align-left">Learn more about DARK SOULS Universe</h3>
                <button className="links__learn-more-button">DISCOVER THE UNIVERSE</button>
            </div>
            <div className="links__primary-merch-container">
                <div className={linksMerchContainerClass}>
                    <img className="links__merch-image" src={merchImageOrange} />
                    <div className="links__text-container">
                        <div className="links__title-alignment-container">
                            <img className="links__merch-icon" src={bandaiNamcoStore} />
                            <h3 className="links__merch-title">Exclusive product derived from your favorites universes!</h3>
                        </div>
                        <img className="links__merch-image-media" src={merchImageOrange} />
                        <button className="links__merch-button links__merch-button_orange">SEE OFFICIAL STORE</button>
                    </div>
                </div>
                <div className={linksMerchContainerClass}>
                    <img className="links__merch-image" src={merchImagePurple} />
                    <div className="links__text-container">
                        <div className="links__title-alignment-container">
                            <img className="links__merch-icon" src={bandaiNamcoEpic} />
                            <h3 className="links__merch-title">Swap your points on our official EP!C Rewards Club</h3>
                        </div>
                        <img className="links__merch-image-media" src={merchImagePurple} />
                        <p className="links__subtitle">Already got the game ?</p>
                        <a className="links__link">REGISTER IT FOR EP!C POINTS</a>
                        <button className="links__merch-button links__merch-button_light-blue">OK LET'S GO</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Links
