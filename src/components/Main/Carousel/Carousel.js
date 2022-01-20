import Slider from "react-slick";
import { useRef } from "react";

import darkSoulsRemastered from "../../../images/dark-souls-remastered.png";
import darkSoulsTwo from "../../../images/dark-souls-2.png";
import darkSoulsThree from "../../../images/dark-souls-3.png";
import darkSoulsTrilogy from "../../../images/dark-souls-trilogy.png";
import eldenRing from "../../../images/elden-ring.png";
import digimonSurive from "../../../images/digimon-survive.png";

import "./Carousel.less";

function Carousel() {
    const sliderRef = useRef()

    function handleClickNext() {
        sliderRef.current.slickNext();
    }

    function handleClickPrevious() {
        sliderRef.current.slickPrev();
    }

    return (
        <div className="carousel">
            <div className="carousel__title-container">
                <h2 className="carousel__title">You may also like</h2>
                <div className="carousel__buttons-container">
                    <button className="carousel__button" onClick={handleClickPrevious}></button>
                    <button className="carousel__button" onClick={handleClickNext}></button>
                </div>
            </div>
            <div className="carousel__slider">
                <Slider
                    ref={sliderRef}
                    dots={false}
                    infinite={true}
                    arrows={false}
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll={1}
                    adaptiveHeight={true}
                    centerMode={true}
                    centerPadding="40px"
                    easing="ease-in-out"
                >
                    <div className="carousel__card">
                        <a className="carousel__link" target="_blank" href="#">
                            <img className="carousel__image" src={eldenRing} />
                            <h3 className="carousel__card-title">ELDEN RING</h3>
                        </a>
                    </div>

                    <div className="carousel__card">
                        <a className="carousel__link" target="_blank" href="#">
                            <img className="carousel__image" src={darkSoulsTrilogy} />
                            <h3 className="carousel__card-title">DARK SOULS TRILOGY</h3>
                        </a>
                    </div>

                    <div className="carousel__card">
                        <a className="carousel__link" target="_blank" href="#">
                            <img className="carousel__image" src={darkSoulsRemastered} />
                            <h3 className="carousel__card-title">DARK SOULS REMASTERED</h3>
                        </a>
                    </div>

                    <div className="carousel__card">
                        <a className="carousel__link" target="_blank" href="#">
                            <img className="carousel__image" src={darkSoulsThree} />
                            <h3 className="carousel__card-title">DARK SOULS III</h3>
                        </a>
                    </div>

                    <div className="carousel__card">
                        <a className="carousel__link" target="_blank" href="#">
                            <img className="carousel__image" src={darkSoulsTwo} />
                            <h3 className="carousel__card-title">DARK SOULS II</h3>
                        </a>
                    </div>

                    <div className="carousel__card">
                        <a className="carousel__link" target="_blank" href="#">
                            <img className="carousel__image" src={digimonSurive} />
                            <h3 className="carousel__card-title">DIGIMON SURVIVE</h3>
                        </a>
                    </div>
                </Slider>
            </div>
            <div className="carousel__cards-media">
                <div className="carousel__card">
                    <a className="carousel__link" target="_blank" href="#">
                        <img className="carousel__image" src={darkSoulsTrilogy} />
                        <h3 className="carousel__card-title">DARK SOULS TRILOGY</h3>
                    </a>
                </div>
                <div className="carousel__card">
                    <a className="carousel__link" target="_blank" href="#">
                        <img className="carousel__image" src={darkSoulsRemastered} />
                        <h3 className="carousel__card-title">DARK SOULS REMASTERED</h3>
                    </a>
                </div>
                <div className="carousel__card">
                    <a className="carousel__link" target="_blank" href="#">
                        <img className="carousel__image" src={darkSoulsThree} />
                        <h3 className="carousel__card-title">DARK SOULS III</h3>
                    </a>
                </div>
            </div>
            <div className="carousel__link-button-container">
                <button className="carousel__link-button">SEE ALL GAMES</button>
            </div>
        </div >

    );
};

export default Carousel;
