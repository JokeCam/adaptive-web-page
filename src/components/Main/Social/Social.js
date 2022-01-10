import "./Social.less"

function Social() {
    return (
        <section className="social">
            <div className="social__container">
                <h3 className="social__title"></h3>
                <p className="social__subtitle"></p>
                <form className="social__form">
                    <input className="social__input" />
                    <button className="social__submit-button"></button>
                </form>
            </div>
            <div className="social__container">
                <h3 className="social__title"></h3>
                <p className="social__subtitle"></p>
                <div className="social__link-container">
                    <a className="social__link"></a>
                    <a className="social__link"></a>
                    <a className="social__link"></a>
                    <a className="social__link"></a>
                    <a className="social__link"></a>
                </div>
            </div>
        </section>
    )
}

export default Social
