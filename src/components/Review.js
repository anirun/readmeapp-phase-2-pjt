import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import book_icon from '../images/book_icon.jpeg'  

function Review({ reviews }) {

  const params = useParams()
  const foundReview = reviews.find(review => review.id === parseInt(params.id))

  if (foundReview) {
    return (
      <Container display="flex">
        <Col>  
          <Row>
            <Card border="header" style={{ width: '25rem' }}>
              <Card.Img variant="top" src={book_icon} alt="Books." />
              <Card.Body>
                  <Card.Title>{foundReview.book} by {foundReview.author}</Card.Title>
                  <Card.Text>
                      {foundReview.text}
                      <br />{foundReview.rating} stars
                  </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Container>
    )
  } else {
    return (<Redirect to="/404" />)
  }
}

export default Review