import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/himoly" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/himanshu-mishra-a15197146/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://wa.me/971547808363" target="_blank" rel="noreferrer"><WhatsAppIcon/></a>
        <a href="mailto:themillionairehimanshu@gmail.com"><EmailIcon/></a>
      </div>
      <p>© {new Date().getFullYear()} Himanshu Mukesh Mishra. Portfolio built on a <a href="https://github.com/himoly/react-portfolio-template" target="_blank" rel="noreferrer">React template</a> with 💰 📊 📈 📉</p>
      <p style={{ fontSize: '0.75rem', opacity: 0.7, maxWidth: 700, margin: '8px auto 0' }}>
        Risk warning: CFDs and forex are leveraged products and carry a high risk of losing money. Content on this site is for information only and is not financial advice.
      </p>
    </footer>
  );
}

export default Footer;