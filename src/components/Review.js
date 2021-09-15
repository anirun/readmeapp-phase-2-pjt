import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import book_icon from '../images/book_icon.jpeg'

function Review({review}) {
    return (
        <div>
            <Card>
                <CardImg src={book_icon} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{review.book}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{review.author}</CardSubtitle>
                    <CardText>{review.text}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Review