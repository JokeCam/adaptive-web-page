import "./Main.css"
import dsBanner from "../../images/ds1-banner.jpg"

import Advertisement from "./Advertisement/Advertisement"
import About from "./About/About"


function Main(props) {
    return (
        <main className="main">
            <Advertisement />
            <img className="main__banner" src={dsBanner} alt="Баннер игры Дарк Соулс"/>
            <About pageYOffset={props.pageYOffset}/>
        </main>
    )
}

export default Main
