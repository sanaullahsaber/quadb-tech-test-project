import React from 'react';
import { Card, Col } from "react-bootstrap";

const ShowListCards = ({ showList }) => {
  const { image, name, summary, url } = showList;
  const mediumImage = image?.medium;
  
  return (
    <Col md={4}>
      <Card className="mb-3">
        {mediumImage && (
          <Card.Img variant="top" src={mediumImage} alt="Show Image" />
        )}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{summary}</Card.Text>
          <Card.Link href={url}>More Info</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShowListCards;