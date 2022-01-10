import "./Social.less"

function Social() {
    return (
        <section className="social">
            <div className="social__container">
                <h3 className="social__title">Dont miss any news</h3>
                <p className="social__subtitle">Get the latest updates from your favorite games</p>
                <form className="social__form">
                    <input className="social__input" />
                    <button className="social__submit-button"></button>
                </form>
            </div>
            <div className="social__container">
                <h3 className="social__title">Follow us</h3>
                <p className="social__subtitle">Become part of the community</p>
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
