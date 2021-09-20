import React from 'react';
import ReviewCard from './ReviewCard';

function ReviewsList( { reviews } ) {
    
    const ReviewCards = reviews.map((review) => <ReviewCard key={review.id} book={review.book} author={review.author} text={review.text} rating={review.rating} />)

    return (
        <div className="centered">
            {ReviewCards}
        </div>
    )
}

export default ReviewsList