import { Card } from 'react-bootstrap';
import '../../styles/TestimonialCard.css'

function TestimonialCard({ text, author, image,country}) {
  return (
    <Card className="text-center p-3" style={{ border: 'none', boxShadow: 'none' }}>
      <Card.Body style={{backgroundColor:"transparent"}}>
      <Card.Img  src={image} className="testimonial-card-img" />
      <Card.Title className="testimonial-card-author">{author}</Card.Title>
      <Card.Text className="country-card-text">{country}</Card.Text>
      <Card.Text className="testimonial-card-text">"{text}"</Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default TestimonialCard;
