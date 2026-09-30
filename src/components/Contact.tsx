import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendMessage = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      const text = `Hi Himanshu, I'm ${name} (${email}).\n\n${message}`;
      window.open(
        `https://wa.me/971547808363?text=${encodeURIComponent(text)}`,
        '_blank'
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Looking for CFD FOREX Brokerage Operations & Support, MIBs & IBsPartnership or Digital Media Services? Let's talk.</p>
          <p>
            <a href="https://wa.me/971547808363" target="_blank" rel="noreferrer">WhatsApp (UAE)</a>
            {' | '}
            <a href="https://wa.me/917770066834" target="_blank" rel="noreferrer">WhatsApp (India)</a>
            {' | '}
            <a href="mailto:themillionairehimanshu@gmail.com">Email</a>
            {' | '}
            <a href="https://www.linkedin.com/in/himanshu-mishra-a15197146/" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendMessage}>
              Send on WhatsApp
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;