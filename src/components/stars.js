import React from 'react';
import star_1 from '../regular_1.png'
import star_2 from '../regular_2.png'
import star_3 from '../regular_3.png'
import star_4 from '../regular_4.png'
import star_5 from '../regular_5.png'

export default (props) => {
    let star
    switch (props.number) {
        case 1:
            star = <img src={star_1} alt="star1" />
            break;
        case 2:
            star = <img src={star_2} alt="star2" />
            break;
        case 3:
            star = <img src={star_3} alt="star3" />
            break;
        case 4:
            star = <img src={star_4} alt="star4" />
            break;
        case 5:
            star = <img src={star_5} alt="star5" />
            break;
        default:
            break;
    }
    return star
}