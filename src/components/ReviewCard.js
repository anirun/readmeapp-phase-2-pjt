import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import book_icon from '../images/book_icon.jpeg'

function ReviewCard({ book, author, text, rating }) {

    const styles = {
        border: '1px solid rgba(0, 0, 0, 5)', 
        width: 275, height: 450, margin: 100,
        padding: '10px',
        alignContent: 'center'
   }

    return (
            <Card style={styles}>
                <CardImg src={book_icon} alt="Books." />
                <CardBody>
                    <CardTitle tag="h5">{book}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{author}</CardSubtitle>
                    <CardText>{text.slice(0,10)}</CardText>
                    <CardText>{rating} stars</CardText>
                    <Button>Read Full Review</Button>
                    <p />
                </CardBody>
            </Card>
    )
}

export default ReviewCard