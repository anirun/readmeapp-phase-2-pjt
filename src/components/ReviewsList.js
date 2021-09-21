import React from 'react';
import ReviewCard from './ReviewCard';
import { Container } from 'react-bootstrap'

function ReviewsList( { reviews } ) {
    
    const ReviewCards = reviews.map((review) => <ReviewCard key={review.id} book={review.book} author={review.author} text={review.text} rating={review.rating} />)

    return (
        <Container>
            {ReviewCards}
        </Container>
    )
}

export default ReviewsList