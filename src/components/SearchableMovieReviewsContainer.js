import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Czp03buufP4HrgvxqwmysLO2robt7mEJ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${URL}${this.state.searchTerm}`)
        .then(res => res.json())
        .then(reviews => this.setState(previousState => ({
            ...previousState,
            reviews: reviews.results
        })))
    }

    handleChange = ({target: {value}}) => {
        this.setState(previousState => ({
            ...previousState,
            searchTerm: value
        }))
    }

    render(){
        return <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input onChange={this.handleChange}/>
                <br />
                <button>Search Reviews</button>
            </form>
            <MovieReviews reviews={this.state.reviews}/>
        </div>
    }
}