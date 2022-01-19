import facebookWhite from "../../images/facebook-white.svg"
import twitterWhite from "../../images/twitter-white.svg"
import youtubeWhite from "../../images/youtube-white.svg"
import twitchWhite from "../../images/twitch-white.svg"
import instagramWhite from "../../images/instagram-white.svg"
import rssWhite from "../../images/rss-white.svg"
import bandaiNamcoLogo from "../../images/bandai-namco-logo.png"

import "./Footer.less"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main-container">
                <div className="footer__main-links">
                    <div className="footer__about-links">
                        <img className="footer__about-links-image" src={bandaiNamcoLogo}/>
                        <a className="footer__about-link">Games</a>
                        <a className="footer__about-link">About Us</a>
                        <a className="footer__about-link">Press</a>
                        <a className="footer__about-link">Careers</a>
                        <a className="footer__about-link">Licensing</a>
                    </div>
                    <div className="footer__social-links">
                        <div className="footer__social-link-icon-container">
                            <img className="footer__social-link-icon" src={facebookWhite} />
                        </div>
                        <div className="footer__social-link-icon-container">
                            <img className="footer__social-link-icon" src={twitterWhite} />
                        </div>
                        <div className="footer__social-link-icon-container">
                            <img className="footer__social-link-icon" src={youtubeWhite} />
                        </div>
                        <div className="footer__social-link-icon-container">
                            <img className="footer__social-link-icon" src={twitchWhite} />
                        </div>
                        <div className="footer__social-link-icon-container">
                            <img className="footer__social-link-icon" src={instagramWhite} />
                        </div>
                        <div className="footer__social-link-icon-container">
                            <img className="footer__social-link-icon" src={rssWhite} />
                        </div>
                    </div>
                </div>
                <div className="footer__additional-links">
                    <div className="footer__additional-links-container">
                        <p className="footer__additional-link-text">JUST GOT A NEW GAME ?</p>
                        <a className="footer__additional-link">Register a game</a>
                    </div>
                    <div className="footer__additional-links-container">
                        <p className="footer__additional-link-text">DEALS AND GIVEAWAYS</p>
                        <a className="footer__additional-link">Join Us Now</a>
                    </div>
                    <div className="footer__additional-links-container">
                        <p className="footer__additional-link-text">LANGUAGES</p>
                        <a className="footer__additional-link footer__additional-link_last-one">English</a>
                    </div>
                    <div className="footer__services-links-container">
                        <p className="footer__services-text">OUR SERVICES</p>
                        <a className="footer__services-link">GAMES</a>
                        <a className="footer__services-link">STORE</a>
                        <a className="footer__services-link">NEWS</a>
                        <a className="footer__services-link">EPIC</a>
                        <a className="footer__services-link">SUPPORT</a>
                    </div>
                </div>
            </div>
            <div className="footer__copyright-container">
                <p className="footer__copyright">© 2010 - 2022 BANDAI NAMCO Europe S.A.S</p>
                <div className="footer__document-links-container">
                    <a className="footer__document-link">Legal notice</a>
                    <a className="footer__document-link">Terms of use</a>
                    <a className="footer__document-link">Privacy Policy</a>
                    <a className="footer__document-link">EP!C Terms</a>
                    <a className="footer__document-link">Cookie policy</a>
                    <a className="footer__document-link">Cookie Management</a>
                    <a className="footer__document-link">Tax Strategy</a>
                    <a className="footer__document-link">Modern Slavery Act</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
