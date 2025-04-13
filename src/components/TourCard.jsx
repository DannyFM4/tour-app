import React, { useState } from 'react';

const TourCard = ({id, name, info, price, image, onRemove}) => {
    // local state to toggle Read More / Read Less
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour-card">
            <h3>{name}</h3>
            <h5 className="tour-price">{price}</h5>
            <img src={image} alt={name} className="tour-image"/>

            <p>
                {readMore ? info : `${info.substring(0, 80)}...`}
                <button onClick={() => setReadMore(!readMore)} className="read-more-btn">
                    {readMore ? 'Show Less' : 'Read More'}
                </button>
            </p>

            <button className="btn-remove" onClick={() => onRemove(id)}>Not Interested</button>


        </article>

    )
}


export default TourCard;
