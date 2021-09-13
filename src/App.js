import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import ReviewsList from './components/ReviewsList';
import NewReviewForm from './components/NewReviewForm';
import Review from './components/Review';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

        <Switch>
          
          <Route exact path="/">
            <ReviewsList />
          </Route>
          
          <Route exact path="/reviews/new">
            <NewReviewForm />
          </Route>
          
          <Route exact path="/reviews/:id">
            <Review />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
