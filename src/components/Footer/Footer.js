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
                        <a className="footer__about-link" target="_blank" href="#">Games</a>
                        <a className="footer__about-link" target="_blank" href="#">About Us</a>
                        <a className="footer__about-link" target="_blank" href="#">Press</a>
                        <a className="footer__about-link" target="_blank" href="#">Careers</a>
                        <a className="footer__about-link" target="_blank" href="#">Licensing</a>
                    </div>
                    <div className="footer__social-links">
                        <a className="footer__social-link" target="_blank" href="#">
                            <img className="footer__social-link-icon" src={facebookWhite} />
                        </a>
                        <a className="footer__social-link" target="_blank" href="#">
                            <img className="footer__social-link-icon" src={twitterWhite} />
                        </a>
                        <a className="footer__social-link" target="_blank" href="#">
                            <img className="footer__social-link-icon" src={youtubeWhite} />
                        </a>
                        <a className="footer__social-link" target="_blank" href="#">
                            <img className="footer__social-link-icon" src={twitchWhite} />
                        </a>
                        <a className="footer__social-link" target="_blank" href="#">
                            <img className="footer__social-link-icon" src={instagramWhite} />
                        </a>
                        <a className="footer__social-link" target="_blank" href="#">
                            <img className="footer__social-link-icon" src={rssWhite} />
                        </a>
                    </div>
                </div>
                <div className="footer__additional-links">
                    <div className="footer__additional-links-container">
                        <p className="footer__additional-link-text">JUST GOT A NEW GAME ?</p>
                        <a className="footer__additional-link" target="_blank" href="#">Register a game</a>
                    </div>
                    <div className="footer__additional-links-container">
                        <p className="footer__additional-link-text">DEALS AND GIVEAWAYS</p>
                        <a className="footer__additional-link" target="_blank" href="#">Join Us Now</a>
                    </div>
                    <div className="footer__additional-links-container">
                        <p className="footer__additional-link-text">LANGUAGES</p>
                        <a className="footer__additional-link footer__additional-link_last-one">English</a>
                    </div>
                    <div className="footer__services-links-container">
                        <p className="footer__services-text">OUR SERVICES</p>
                        <a className="footer__services-link" target="_blank" href="#">GAMES</a>
                        <a className="footer__services-link" target="_blank" href="#">STORE</a>
                        <a className="footer__services-link" target="_blank" href="#">NEWS</a>
                        <a className="footer__services-link" target="_blank" href="#">EPIC</a>
                        <a className="footer__services-link" target="_blank" href="#">SUPPORT</a>
                    </div>
                </div>
            </div>
            <div className="footer__copyright-container">
                <p className="footer__copyright">© 2010 - 2022 BANDAI NAMCO Europe S.A.S</p>
                <div className="footer__document-links-container">
                    <a className="footer__document-link" target="_blank" href="#">Legal notice</a>
                    <a className="footer__document-link" target="_blank" href="#">Terms of use</a>
                    <a className="footer__document-link" target="_blank" href="#">Privacy Policy</a>
                    <a className="footer__document-link" target="_blank" href="#">EP!C Terms</a>
                    <a className="footer__document-link" target="_blank" href="#">Cookie policy</a>
                    <a className="footer__document-link" target="_blank" href="#">Cookie Management</a>
                    <a className="footer__document-link" target="_blank" href="#">Tax Strategy</a>
                    <a className="footer__document-link" target="_blank" href="#">Modern Slavery Act</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
