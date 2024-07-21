import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { FaDiscord } from 'react-icons/fa6';

// Gmail login:
// Username: interns.fyi24@gmail.com
// Password: moneymoves

// Mailchimp Login:
// Username: interns.fyi24@gmail.com
// Password: Moneymoves2024*

// Mailchimp API:
// Api_key: c1f52a9795e47eeaa9d97248d0ead2f1-us13
// Audience_ID: 6f7951fb4d

const Email = () => {
  const [open, setOpen] = useState(false);
  const [address, setEmail] = useState({
    email: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      if (address.email.includes('@')) {
        console.log('Email submitted:', address);
        await axios.post('http://localhost:8800/user', address);
        setOpen(true);
      } else {
        console.log('Invalid email');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="email-form"
        onSubmit={handleSubmit}
      >
        <div className="email-container">
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            className="email-input"
            value={address.email}
            onChange={(e) => setEmail({ email: e.target.value })}
          />
          <Button
            type="submit"
            variant="contained"
            className="waitlist-button"
            disabled={!address.email.includes('@')} // Disable button if email does not contain '@'
          >
            Join our waitlist
          </Button>
        </div>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-content">
          <div id="modal-modal-title" className="modal-title">
            Thank you for joining our waitlist!
          </div>
          <div id="modal-modal-description" className="modal-description">
            We'll let you know when we launch.
          </div>
          <a
            href="https://discord.gg/duTNTruE9p"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord
              size={50}
              style={{ color: 'white', marginLeft: '10px', marginBottom: '-50px' }}
            />
          </a>
        </Box>
      </Modal>
    </div>
  );
};

export default Email;
