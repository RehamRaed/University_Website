import React from "react";
import { Container ,Row ,Col} from "react-bootstrap";
import { Link } from "react-scroll";
import '../../styles/Footer.css'
function Footer(){
    return(
    <section id="footer_section">
        <Container>
                   
             <div className="footer">
               <h5>© 2024 Edusity. All rights reserved.</h5>
               <ul>
               <li>
               <a href="https://www.youtube.com/@GreatStackDev/videos" target="_blank">Terms of Services</a></li>
             
             <li>  <a href="https://www.youtube.com/@GreatStackDev/videos" target="_blank">Privacy Policy</a> </li>
                 </ul>
                 </div>
        </Container>
    </section>
)
}
export default Footer;
