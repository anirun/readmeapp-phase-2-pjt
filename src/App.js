import './App.css'
import React, { useState, useEffect } from 'react'
import { useHistory, Route, Switch } from 'react-router-dom'
import ReviewsList from './components/ReviewsList'
import NewReviewForm from './components/NewReviewForm'
import Review from './components/Review'
import Navbar from './components/Navbar'
import FourOhFour from './components/404'
import 'bootstrap/dist/css/bootstrap.min.css';
// import SearchBar from './components/SearchBar'

function App() {
  const history = useHistory()
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
      history.push(`/`)
    })
  }

  return (
    <div className="App">

      <h1>ReadMe</h1>
      <h3>Find something new to read!</h3>
      <p></p>
      <h5>Welcome to ReadMe - check out some book reviews, and help others discover new books by writing your own reviews!</h5>
      <p></p>
      <Navbar />

      {/* <SearchBar /> */}

      <Switch>
        
        <Route exact path="/reviews">
          <ReviewsList reviews={reviews} />
        </Route>
        
        <Route exact path="/reviews/new">
          <NewReviewForm reviews={reviews} addReview={addReview} />
        </Route>
        
        <Route exact path="/reviews/:id">
          <Review reviews={reviews} />
        </Route>

        <Route path="/404">
          <FourOhFour />
        </Route>

      </Switch>

    </div>
  )
}

export default App;
