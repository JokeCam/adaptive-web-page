import ratingIcon from "../../../images/rating-16.png"
import ratingIconUSK from "../../../images/rating-16-usk.png"
import ratingIconPlus from "../../../images/rating-16-plus.png"

import "./Rating.less"

function Rating() {
    return (
        <div className="rating">
            <img className="rating__image" src={ratingIcon}/>
            <img className="rating__image" src={ratingIconPlus}/>
            <img className="rating__image" src={ratingIconUSK}/>
            <p className="rating__text">Dark Souls™ &#38; ©BANDAI NAMCO Entertainment Inc. / ©FromSoftware, Inc.</p>
        </div>
    )
}

export default Rating
