import './style.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left text-white">
        <h5>Find Us On</h5>
        <ul>
        <li><a href="https://nooralam.netlify.app/" target="_blank" rel="noopener noreferrer">My Portfolio</a></li>
        <li><a href="https://github.com/noorhunzai" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://app.netlify.com/teams/noorhunzai" target="_blank" rel="noopener noreferrer">Netlify</a></li>
        <li><a href="https://www.linkedin.com/in/nooralamhunzai/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>        
        <li><a href="https://scintillating-sfogliatella-07a14a.netlify.app/" target="_blank" rel="noopener noreferrer">HITS</a></li>
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