import "./Main.css"
import dsBanner from "../../images/ds1-banner.jpg"

import Advertisement from "./Advertisement/Advertisement"
import About from "./About/About"


function Main() {
    return (
        <main className="main" >
            <Advertisement />
            <img className="main__banner" src={dsBanner} alt="Баннер игры Дарк Соулс"/>
            <About />
        </main>
    )
}

export default Main
