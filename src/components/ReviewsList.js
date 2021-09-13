import React from 'react';
import Review from './Review';

function ReviewsList({reviews}) {
    
    const mappedReviews = reviews.map((review) => <Review review={review} key={review.id} />)
    
    return (
        <div>
            {mappedReviews}
        </div>
    )
}

export default ReviewsList