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
          <Col md={3} key={showList?.show?.id}>
            <ShowListCards showList={showList?.show}></ShowListCards>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShowList;
