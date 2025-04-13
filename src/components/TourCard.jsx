import React, { useState } from 'react';

const TourCard = ({id, name, info, price, image, onRemove}) => {
    // local state to toggle Read More / Read Less
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour-card">
            {/* Laysout the tour card information */}
            <h3>{name}</h3>
            <h5 className="tour-price">{price}</h5>
            <img src={image} alt={name} className="tour-image"/>

            <p>
                {/*Will how more information or can show less*/}
                {readMore ? info : `${info.substring(0, 80)}...`}
                <button onClick={() => setReadMore(!readMore)} className="read-more-btn">
                    {/* Button Text */}
                    {readMore ? 'Show Less' : 'Read More'}
                </button>
            </p>

            {/* Button to remove the tour card from the list */}
            <button className="btn-remove" onClick={() => onRemove(id)}>Not Interested</button>


        </article>

    )
}


export default TourCard;
