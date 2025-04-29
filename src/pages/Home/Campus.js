import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../styles/Campus.css";
import gallery1 from "../../assest/4j8kxyyq.png";
import gallery2 from "../../assest/oaw77hjr.png";
import gallery3 from "../../assest/xtq00pbw.png";
import gallery4 from "../../assest/co2tk4q9.png";

function Campus() {
  const gallery = [
    {
      src: gallery1,
    },
    {
      src: gallery2,
    },
    {
      src: gallery3,
    },
    {
      src: gallery4,
    },
  ];

  return (
    <section id="campus_section">
      <Container className="custom-container">
        <div className="text-center mb-5">
          <h4>Gallery</h4>
          <h2>Campus Photos</h2>
        </div>
        <Row className="g-4 justify-content-center">
          {gallery.map((img, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <div
                className="image-box"
                style={{ backgroundImage: `url(${img.src})` }}
              ></div>
            </Col>
          ))}
        </Row>
        <div className="btn_container">
          <a>
            See more here <i className="bi bi-arrow-right see-icon"></i>
          </a>
        </div>
      </Container>
    </section>
  );
}
export default Campus;
