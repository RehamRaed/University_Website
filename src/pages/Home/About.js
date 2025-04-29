import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import universityVideo from "../../assest/vedios/6334253-sd_640_338_25fps.mp4";
import posterImage from '../../assest/istockphoto-1458710953-640x640.jpg';
import "../../styles/About.css";
function About() {
  return (
    <section id="about_section">
      <Container className="custom-container">
        <Row className="row">
        <Col lg={5} sm={12} md={12} className="first_col">
          <video width="100%" controls  muted loop poster={posterImage} >
            <source src={universityVideo} type="video/mp4" />
            error
          </video>
        </Col>
        <Col lg={7} sm={12} md={12} className="seconed_col">
          <h4>ABOUT UNIVERSITY</h4>
          <h2>
            Nurturing Tomorrow's <br /> Leaders Today
          </h2>
          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>
          <p>
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>
          <p>
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;
