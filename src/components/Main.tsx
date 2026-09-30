import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={process.env.PUBLIC_URL + "/avatar.jpg"} alt="HIMANSHU MISHRA" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/himanshu-mishra-a15197146/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://wa.me/971547808363" target="_blank" rel="noreferrer"><WhatsAppIcon/></a>
            <a href="mailto:themillionairehimanshu@gmail.com"><EmailIcon/></a>
          </div>
          <h1>HIMANSHU MISHRA</h1>
          <p>Administrative Manager | CFD Forex Brokerage Operations | Logicstics | Tech</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/himanshu-mishra-a15197146/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://wa.me/971547808363" target="_blank" rel="noreferrer"><WhatsAppIcon/></a>
            <a href="mailto:themillionairehimanshu@gmail.com"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;