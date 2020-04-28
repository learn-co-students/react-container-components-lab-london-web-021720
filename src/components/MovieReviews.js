// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
        debugger
        return (
            <div className="review-list">
                {props.reviews && props.reviews.map(r => <div className="review">
                    {r.byline}
                    </div>)}
            </div>
        )
}

export default MovieReviews