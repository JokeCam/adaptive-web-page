import "./Advertisement.less";

function Advertisement() {

    return (
        <div className="advertisement" >
            <div className="advertisement__alignment-container">
                <p className="advertisement__text">Winter Sale: Up to -95% on our games and related products!</p>
                <button className="advertisement__button">Don't miss it!</button>
            </div>
            <button className="advertisement__close-button"></button>
        </div>
    )
};

export default Advertisement;
