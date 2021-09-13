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

function App() {

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [])

  return (
    <div className="App">
      <Router>

        <Navbar />

        <Switch>
          
          <Route exact path="/">
            <ReviewsList reviews={reviews} />
          </Route>
          
          <Route exact path="/reviews/new">
            <NewReviewForm />
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
