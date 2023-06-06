import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import ShowListCards from "./ShowListCards";

const ShowList = () => {
  const showLists = useLoaderData();

  return (
    <Container>
      <Row>
        {showLists.map((showList) => (
          <ShowListCards
            key={showList.show.id}
            showList={showList.show}
          ></ShowListCards>
        ))}
      </Row>
    </Container>
  );
};

export default ShowList;
