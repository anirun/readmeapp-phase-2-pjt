import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import book_icon from '../images/book_icon.jpeg'

function ReviewCard({ book, author, text, rating }) {

    return (
        <Col>
            <Card border="header" style={{ width: '15rem' }}>
                <Card.Img variant="top" src={book_icon} alt="Books." />
                <Card.Body>
                    <Card.Title>{book} by {author}</Card.Title>
                    <Card.Text>
                        {text.slice(0,10)}
                        <br />{rating} stars
                    </Card.Text>
                    <Button variant="primary" >Read Full Review</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ReviewCard