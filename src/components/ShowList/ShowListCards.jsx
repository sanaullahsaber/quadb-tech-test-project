import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowListCards = ({ showList }) => {
  const { image, name, id } = showList;
  const mediumOriginal = image?.original;

  return (
    <Card className="mb-3">
      {mediumOriginal && (
        <Card.Img
          style={{height: '450px'}}
          className="img-fluid"
          variant="top"
          src={mediumOriginal}
          alt="Show Image"
        />
      )}
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>

        <div className="text-center">
          <Link to={`/summary/${id}`} className="text-black">
            <Button variant="outline-primary">Summary</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ShowListCards;
