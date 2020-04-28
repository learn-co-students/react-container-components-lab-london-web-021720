import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query="

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        fetch(URL + this.state.searchTerm)
        .then(res => res.json())
        .then(rev => this.setState({
            reviews: rev["results"]
        }))
    }

    render() {
        return (
            <form className="searchable-movie-reviews" onSubmit={this.handleSubmit}>
                <input name="searchTerm" value="searchTerm" onChange={this.handleChange} />
                <MovieReviews reviews={this.state.reviews} />
            </form>
        )
    }
}

export default SearchableMovieReviewsContainer