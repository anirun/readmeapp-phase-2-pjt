import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
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
