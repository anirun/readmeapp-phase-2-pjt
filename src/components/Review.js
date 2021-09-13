import React from 'react'

function Review({review}) {
    return (
        <div>
            <p></p>
            {review.book}
            <br/>
            {review.author}
            <br/>
            {review.text}
            <p></p>
        </div>
    )
}

export default Review