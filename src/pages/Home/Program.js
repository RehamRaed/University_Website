import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Program.css";
import img1 from '../../assest/y49fa164.png';
import img2 from '../../assest/6ngsv6tf.png';
import img3 from '../../assest/mvocsps4.png';


function Program() {
  const images = [
    {
      icon: "bi-mortarboard", 
      title: "Graduation Degree",
      src: img1,
    },
    {
      icon: "bi-easel2",
      title: "Masters Degree",
      src: img2,
    },
    {
      icon: "bi-award",
      title: "Post Graduation",
      src: img3,
    },
  ];

  return (
    <section id="program_section" style={{ paddingTop: "70px", paddingBottom: "70px" }}>
      <Container className="custom-container">
        <div className="text-center mb-5">
          <h4 >Our PROGRAM</h4>
          <h2 >What We Offer</h2>
        </div>
        <Row className="g-4 justify-content-center">
          {images.map((img, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <div
                className="image-box"
                style={{ backgroundImage: `url(${img.src})` }}
              >
                <div className="overlay">
                  <i className={`bi ${img.icon} icon`}></i>
                  <h5>{img.title}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Program;