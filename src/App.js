import './App.css'
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom'
import ReviewsList from './components/ReviewsList'
import NewReviewForm from './components/NewReviewForm'
import Review from './components/Review'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'

function App() {

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [])

  function addReview(newReview) {
    fetch(`http://localhost:3000/reviews`, {
      method: 'POST',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then(newReview => {
      const newArray = [...reviews, newReview]
      setReviews(newArray)
    })
  }

  return (
    <div className="App">
      <Router>

        <Navbar />

        <SearchBar />

        <Switch>
          
          <Route exact path="/">
            <ReviewsList reviews={reviews} />
          </Route>
          
          <Route exact path="/reviews/new">
            <NewReviewForm reviews={reviews} addReview={addReview}/>
          </Route>
          
          <Route exact path="/reviews/:id">
            <Review reviews={reviews} />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App;
