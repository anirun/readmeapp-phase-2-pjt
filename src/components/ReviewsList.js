import React from 'react';
import ReviewCard from './ReviewCard'
import { Container, Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

function ReviewsList( { reviews } ) {
    
    const ReviewCards = reviews.map((review) => 
        <Col key={review.id}>
            <ReviewCard
                book={review.book} 
                author={review.author} 
                text={review.text} 
                rating={review.rating}
                />
        </Col>
    )

    return (
        <Container display="flex">
            <Row>
                {ReviewCards}
            </Row>
        </Container>
    )
}

export default ReviewsList