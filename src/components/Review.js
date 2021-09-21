import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import book_icon from '../images/book_icon.jpeg'  

function Review({ reviews }) {

  const params = useParams()
  
  const foundReview = reviews.find(review => review.id === parseInt(params.id))

  if (foundReview) {
    return (
      <Card border="header" style={{ width: '25rem', position: 'relative', left: '50%', marginLeft: '-12.5rem' }}>
        <Card.Img variant="top" src={book_icon} alt="Books." />
        <Card.Body>
            <Card.Title>{foundReview.book} by {foundReview.author}</Card.Title>
            <Card.Text>
                {foundReview.text}
                <br />{foundReview.rating} stars
            </Card.Text>
        </Card.Body>
      </Card>
    )
  } else {
    return (<Redirect to="/404" />)
  }
}

export default Review