import './App.css'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import ReviewsList from './components/ReviewsList'
import NewReviewForm from './components/NewReviewForm'
import Review from './components/Review'
import Navbar from './components/Navbar'
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

      <Navbar />

      {/* <SearchBar /> */}

      <Switch>
        
        <Route exact path="/reviews">
          <ReviewsList reviews={reviews} history={history}/>
        </Route>
        
        <Route exact path="/reviews/new">
          <NewReviewForm reviews={reviews} addReview={addReview}/>
        </Route>
        
        <Route exact path="/reviews/:id">
          <Review reviews={reviews} />
        </Route>

      </Switch>

    </div>
  )
}

export default App;
