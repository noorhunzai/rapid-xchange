import './style.css';
import { BsHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left text-white">
        <h5>Find Me</h5>
        <ul>
          <li><a href="https://nooralam.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-green text-decoration-underline">My Portfolio</a></li>
          <li><a href="https://www.linkedin.com/in/nooralamhunzai/" target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-underline">LinkedIn</a></li>
          <li><a href="https://github.com/noorhunzai" target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-underline">GitHub</a></li>
          <li><a href="https://app.netlify.com/teams/noorhunzai" target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-underline">Netlify</a></li>           
          <li><a href="https://scintillating-sfogliatella-07a14a.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-underline">HITS</a></li>
        </ul>
      </div>
      <div className="footer-center text-center">
        <h5 className="text-success">Special Thanks to Altacademy</h5>
        <ul className="remove-bullets">
          <li><a href="https://www.altcademy.com/" target="_blank" rel="noopener noreferrer">Altcademy.com</a></li> 
          <li className='text-danger'><a href="#"><BsHeartFill size={40} style={{ color: "red" }}/></a></li>
        </ul>
      </div>
      <div className="footer-right">
        <h5>More Info</h5>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>      
    </div>
  );
};

export default Footer;
