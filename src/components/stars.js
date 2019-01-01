import React from 'react';
import star_1 from '../regular_1.png'
import star_2 from '../regular_2.png'
import star_3 from '../regular_3.png'
import star_4 from '../regular_4.png'
import star_5 from '../regular_5.png'

export default (props) => {
    let star
    const { number } = props
    if (number >= 1 && number < 2) {
        star = <img src={star_1} alt="star1" />
    } else if (number >=2 && number < 3) {
        star = <img src={star_2} alt="star2" />
    } else if (number >= 3 && number < 4) {
        star = <img src={star_3} alt="star3" />
    } else if (number >= 4 && number < 5) {
        star = <img src={star_4} alt="star4" />
    } else if (number === 5) {
        star = <img src={star_5} alt="star5" />
    } else {
        star = <p>Rating not available</p> 
    }
    return star
}