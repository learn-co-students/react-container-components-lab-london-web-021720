// Code MovieReviews Here
import React from "react"

const RenderReview = ({headline, link, summary_short, date_updated}) => {
    return <li className="review">
        <a href={link.url}><h2>{headline}</h2></a>
        <p>{summary_short}</p>
        <footer>{date_updated}</footer>
    </li>
}

const MovieReviews = props => {
    return <div className="review-list"><ul>{props.reviews.map(RenderReview)}</ul></div>
}


export default MovieReviews