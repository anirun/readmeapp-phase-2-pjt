import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import book_icon from '../images/book_icon.jpeg'
import { Link } from 'react-router-dom'

function ReviewCard({ book, author, text, rating, key }) {

    return (
        <Col>
            <Card border="header" style={{ width: '15rem' }}>
                <Card.Img variant="top" src={book_icon} alt="Books." />
                <Card.Body>
                    <Card.Title>{book} by {author}</Card.Title>
                    <Card.Text>
                        {text.slice(0,10)} ... <Link to={`/reviews/${key}`}>Read full review...</Link>
                        <br />{rating} stars
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ReviewCard