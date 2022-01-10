import "./Main.less";
import dsBanner from "../../images/ds1-banner.jpg";

import Advertisement from "./Advertisement/Advertisement";
import About from "./About/About";
import Social from "./Social/Social";


function Main(props) {
    return (
        <main className="main" >
            <Advertisement />
            <img className="main__banner" src={dsBanner} alt="Баннер игры Дарк Соулс"/>
            <About pageYOffset={props.pageYOffset}/>
            <Social />
        </main>
    )
};

export default Main;
