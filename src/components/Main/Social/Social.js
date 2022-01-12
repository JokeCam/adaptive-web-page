import "./Social.less"

import { useRef, useEffect, useState } from "react"

import facebookIcon from "../../../images/social-facebook-icon.svg"
import twitterIcon from "../../../images/social-twitter-icon.svg"
import youtubeIcon from "../../../images/social-youtube-icon.svg"
import twitchIcon from "../../../images/social-twitch-icon.svg"
import instagramIcon from "../../../images/social-instagram-icon.svg"

function Social() {
    const [pageYOffset, setPageYOffset] = useState(0);
    const backgroundImageRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", windowScrollListener);

        return () => {
            window.removeEventListener("scroll", windowScrollListener);
        };

    }, []);

    useEffect(() => {
        if (pageYOffset > 1840 && pageYOffset < 2160) {
            backgroundImageRef.current.style.backgroundPosition = `0 ${(-pageYOffset + 1840) / 3.5}px`
        }
    }, [pageYOffset])

    function windowScrollListener() {
        setPageYOffset(window.pageYOffset);
    };

    return (
        <section className="social" ref={backgroundImageRef}>
            <div className="social__container">
                <h3 className="social__form-title">Dont miss any news</h3>
                <p className="social__form-subtitle">Get the latest updates from your favorite games</p>
                <form className="social__form">
                    <input className="social__input" placeholder="Your email" />
                    <button className="social__submit-button">SUBSCRIBE</button>
                </form>
            </div>
            <div className="social__container">
                <h3 className="social__title">Follow us</h3>
                <p className="social__subtitle">Become part of the community</p>
                <div className="social__link-container">
                    <a className="social__link" href="https://www.facebook.com/BandaiNamcoEU/" target="_blank">
                        <img className="social__link-image" src={facebookIcon} />
                    </a>
                    <a className="social__link" href="https://twitter.com/DarkSoulsGame" target="_blank">
                        <img className="social__link-image" src={twitterIcon} />
                    </a>
                    <a className="social__link" href="https://www.youtube.com/user/NamcoBandaiGamesEU" target="_blank">
                        <img className="social__link-image" src={youtubeIcon} />
                    </a>
                    <a className="social__link" href="https://www.twitch.tv/bandainamcoeurope" target="_blank">
                        <img className="social__link-image" src={twitchIcon} />
                    </a>
                    <a className="social__link" href="https://www.instagram.com/accounts/login/" target="_blank">
                        <img className="social__link-image" src={instagramIcon} />
                    </a>
                </div>
            </div>
        </section> 
    )
}

export default Social
