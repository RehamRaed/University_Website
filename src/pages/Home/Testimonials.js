import React from "react";
import { Container, Carousel } from "react-bootstrap";
import TestimonialCard from "../../components/layouts/TestimonialCard";
import person1 from "../../assest/person1.png";
import person2 from "../../assest/person2.png";
import person3 from "../../assest/person3.png";
import person4 from "../../assest/person4.png";
import "../../styles/Testimonials.css";
function Testimonials() {
  const testimonialsData = [
    {
      image: person1,
      author: "Emily Williams",
      text: "My experience at Edusity was more than just education, it was a journey full of challenges and personal growth. I’m proud to have been a part of this great institution that taught me how to believe in myself and strive for excelle",
      country: "Edusity, USA",
    },
    {
      image: person3,
      author: "William Jackson",
      text: "Edusity wasn’t just a place where I learned subjects; it was where I learned how to face life with confidence and ambition. I am truly grateful for every moment spent within its walls",
      country: "Edusity, USA",
    },
    {
      image: person2,
      author: "Liam Johnson",
      text: "The years I spent at Edusity shaped the best phase of my life. The supportive environment and dedicated professors helped me become the best version of myself",
      country: "Edusity, USA",
    },
    {
      image: person4,
      author: "Emma Thompson",
      text: "If it weren’t for Edusity, I wouldn’t have achieved everything I have today. My degree is not just a piece of paper; it’s a story of hard work, support, and the incredible opportunities this university has given me",
      country: "Edusity, USA",
    },
  ];

  return (
    <section id="testimonials_section">
      <Container style={{ maxWidth: "1200px" }}>
        <div className="text-center ">
          <h4>TESTIMONIALS</h4>
          <h2>What Student Says</h2>
        </div>
        <Carousel
          indicators={false}
          controls={true}
          interval={5000}
          nextIcon={
            <i
              className="bi bi-chevron-right"
              style={{ fontSize: "2.5em", color: "rgb(33, 13, 160)"  }}
            ></i>
          }
          prevIcon={
            <i
              className="bi bi-chevron-left"
              style={{ fontSize: "2.5rem", color: "rgb(33, 13, 160)" }}
                          ></i>
          }
        >
          {testimonialsData.map((item, index) => (
            <Carousel.Item key={index}>
              <TestimonialCard
                text={item.text}
                author={item.author}
                image={item.image}
                country={item.country}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
export default Testimonials;
