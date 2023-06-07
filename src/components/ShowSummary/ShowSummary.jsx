import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";

const ShowSummary = () => {
  const showSummary = useLoaderData();
  const [showModal, setShowModal] = useState(false);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  const {
    summary,
    name,
    status,
    rating,
    image,
    language,
    network,
    schedule,
    runtime,
    type,
    genres,
    id,
  } = showSummary;
  const mediumOriginal = image?.original;
  const networkName = network?.name;
  const scheduleTime = schedule?.time;
  const scheduleDays = schedule?.days[0];
  const genresOne = genres[0];
  const genresTwo = genres[1];

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.nameInput.value;
    const email = form.emailInput.value;
    const phone = form.phoneInput.value;
    const showDate = form.dateInput.value;
    const message = form.messageInput.value;

    const userDetails = {
      id,
      name,
      email,
      phone,
      date: showDate,
      message,
      movieName: name,
    };

    const previousData = localStorage.getItem("userDetails");

    if (previousData) {
      const parsedData = JSON.parse(previousData);

      const existingDataIndex = parsedData.findIndex((data) => data.id === id);
      if (existingDataIndex !== -1) {
        parsedData[existingDataIndex] = userDetails; // Update the existing data with the new values
      } else {
        parsedData.push(userDetails); // Add the new data to the existing array
      }

      localStorage.setItem("userDetails", JSON.stringify(parsedData));
    } else {
      localStorage.setItem("userDetails", JSON.stringify([userDetails]));
    }

    form.reset();

    // Close the modal
    handleModalClose();

    if (localStorage.getItem("userDetails")) {
      // Display SweetAlert if data is stored in local storage
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Data stored successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      return;
    }
  };

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
        <Col md={4} className="mt-4">
          <div className="">
            <span className="fs-1  text-left">Show Info</span>
            <h1 className="mb-4 text-left">{name}</h1>
            <p className="mb-0">
              <strong>Network:</strong> {networkName}
            </p>
            <p className="mb-0  text-left">
              <strong>Schedule:</strong> {scheduleDays} at {scheduleTime} (
              {runtime}min){" "}
            </p>
            <p className="mb-0  text-left">
              <strong>Status:</strong> {status}
            </p>
            <p className="mb-0 text-left">
              <strong>Show Type: </strong>
              {type}
            </p>
            <p className="mb-0 text-left">
              <strong>Genres: </strong>
              {genresOne} || {genresTwo}
            </p>
            <p className="mb-0">
              <strong>Rating:</strong>{" "}
              {rating?.average ? rating.average : "No Rating"}
            </p>
            <p className="mb-0">
              <strong>Language:</strong> {language}
            </p>
          </div>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <Button variant="outline-primary" onClick={handleModalOpen}>
          Book Ticket
        </Button>
      </div>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Form - {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Name
              </label>
              <input
                defaultValue={name}
                type="text"
                className="form-control"
                id="nameInput"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneInput" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneInput"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dateInput" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="dateInput"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="messageInput" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="messageInput"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-3">
              <input type="submit" value="Booking Ticket" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ShowSummary;
