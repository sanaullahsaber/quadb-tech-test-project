import React from "react";
import { useLoaderData } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const ShowSummary = () => {
  const showSummary = useLoaderData();

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  const { summary, name, status, rating, image, language, network , schedule , runtime, type , genres} = showSummary;
  const mediumOriginal = image?.original;
  const networkName = network?.name;
  const scheduleTime = schedule?.time;
  const scheduleDays = schedule?.days[0];
  const genresOne = genres[0];
  const genresTwo = genres[1];

  return (
    <Container className="py-5">
      <Row>
        <Col md={2} className="mt-4">
          <img src={mediumOriginal} alt={name} className="img-fluid mb-4" />
        </Col>
        <Col md={6}>
          <div className="p-4 rounded">
            <h3 className="mb-4">Summary</h3>
            <p className="lead">{removeTags(summary)}</p>
          </div>
        </Col>
        <Col md={4} className="">
          <div className="">
            <span className="fs-1  text-left">Show Info</span>
            <h1 className="mb-4 text-left">{name}</h1>
            <p className="mb-0"><strong>Network:</strong> {networkName}</p>
            <p className="mb-0  text-left"><strong>Schedule:</strong> {scheduleDays} at {scheduleTime} ({runtime}min) </p>
            <p className="mb-0  text-left"><strong>Status:</strong> {status}</p>
            <p className="mb-0 text-left"><strong>Show Type: </strong>{type}</p>
            <p className="mb-0 text-left"><strong>Genres: </strong>{genresOne} || {genresTwo}</p>
            <p className="mb-0"><strong>Rating:</strong> {rating?.average ? rating.average : "No Rating"}</p>
            <p className="mb-0"><strong>Language:</strong> {language}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowSummary;
