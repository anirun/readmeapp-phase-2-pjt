import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import book_icon from '../images/book_icon.jpeg'    
import { Link } from 'react-router-dom'

function ReviewCard({ review }) {

    return (
        <Col>
            <Card border="header" style={{ width: '15rem', marginTop: '100px' }}>
                <Card.Img variant="top" src={book_icon} alt="Books." />
                <Card.Body>
                    <Card.Title>{review.book} by {review.author}</Card.Title>
                    <Card.Text>
                        {review.text.slice(0,10)} ... <Link to={`/reviews/${review.id}`}>(read review)</Link>
                        <br />{review.rating} stars
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ReviewCard