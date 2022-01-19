import Advertisement from "./Advertisement/Advertisement";
import About from "./About/About";
import Social from "./Social/Social";
import classnames from "classnames";
import dsBanner from "../../images/ds1-banner.jpg";

import "./Main.less";

function Main(props) {
    const mainBannerClass = classnames(
        "main__banner",
        {
            "main__banner_disabled": props.pageYOffset > 450,
        }
    )

    return (
        <main className="main" >
            <Advertisement />
            <img className={mainBannerClass} src={dsBanner} alt="Баннер игры Дарк Соулс"/>
            <About pageYOffset={props.pageYOffset}/>
            <Social pageYOffset={props.pageYOffset}/>
        </main>
    )
};

export default Main;
