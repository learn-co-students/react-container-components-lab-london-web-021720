import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Czp03buufP4HrgvxqwmysLO2robt7mEJ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    componentDidMount = () => {
        fetch(URL)
        .then(res => res.json())
        .then(review => this.setState({
            reviews: [review.results[0]]
        }))
    }

    render(){
        return <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
    }
}