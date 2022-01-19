import Advertisement from "./Advertisement/Advertisement";
import About from "./About/About";
import Social from "./Social/Social";
import Links from "./Links/Links";
import Rating from "./Rating/Rating"
import Carousel from "./Carousel/Carousel"
import { useState, useEffect } from "react"
import classnames from "classnames";

import dsBanner from "../../images/ds1-banner.jpg";
import "./Main.less";

function Main(props) {
    const [pageYOffset, setPageYOffset] = useState(0);
      
    const mainBannerClass = classnames(
        "main__banner",
        {
            "main__banner_disabled": pageYOffset > 450,
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
        <main className="main" >
            <Advertisement />
            <img className={mainBannerClass} src={dsBanner} alt="Баннер игры Дарк Соулс" />
            <About />
            <Social />
            <Links />
            <Rating />
            <Carousel />
        </main>
    )
};

export default Main;
