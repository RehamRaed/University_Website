import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); 
    }
  
  };
  
  return (
    <section id="contact_section">
      {showAlert && (
  <div className="custom-alert">
     Your message has been sent successfully!✅
  </div>
)}
      <Container className="custom-container">
        <div className="text-center mb-5">
          <h4>Contact Us</h4>
          <h2>Get in Touch</h2>
        </div>
        <Row className="row">
          <Col lg={6} md={6} className="first-col">
            <h2>Send us a message</h2>
            <p>
              Feel free to reach out through contact form or find our contact
              information below. Your feedback, questions, and suggestions are
              important to us as we strive to provide exceptional service to our
              university community.
            </p>
            <div className="info">
              <i className="bi bi-envelope-fill icon"></i>
              <span>Contact@GreatStack.dev</span>
            </div>
            <div className="info">
              <i className="bi bi-telephone-fill icon"></i>
              <span>+1 123-456-7890</span>
            </div>
            <div className="info">
              <i className="bi bi-geo-alt-fill icon"></i>
              <span>
                77 Massachusetts Ave, Cambridge
                <br /> MA 02139, United States
              </span>
            </div>
          </Col>

          <Col lg={6} md={6}>
            <div>
              <input
                className={`custom-input ${errors.name ? "input-error" : ""}`}
                placeholder="Your Name..."
                type="text"
                value={formData.name}
                onChange={(e) => handleChange(e, "name")}
                autoComplete="off"
              />
              <input
                className={`custom-input ${errors.phone ? "input-error" : ""}`}
                placeholder="Your Phone..."
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange(e, "phone")}
                autoComplete="off"
              />
              <input
                className={`custom-input ${errors.email ? "input-error" : ""}`}
                placeholder="Your Email..."
                type="email"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
                autoComplete="off"
              />
              <textarea
               rows="6"
                className={`custom-input ${errors.message ? "input-error" : ""}`}
                placeholder="Your Message..."
                value={formData.message}
                onChange={(e) => handleChange(e, "message")}
              />
            </div>

            <div className="c-btn">
              <a onClick={handleSubmit}>Submit Now</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

