import Advertisement from "./Advertisement/Advertisement";
import About from "./About/About";
import Social from "./Social/Social";
import Links from "./Links/Links";
import Rating from "./Rating/Rating"
import CarouselMain from "./CarouselMain/CarouselMain"
import classNames from "classnames";
import { useState, useEffect } from "react"

import "./Main.less";
import dsBanner from "../../images/ds1-banner.jpg";

function Main() {
    const [pageYOffset, setPageYOffset] = useState(0);

    const mainBannerClass = classNames(
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
            <CarouselMain />
        </main>
    )
};

export default Main;
