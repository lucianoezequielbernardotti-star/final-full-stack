import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <div>
      <IconButton aria-label="Facebook" href="https://www.facebook.com" target="_blank">
        <FacebookOutlinedIcon />
      </IconButton>
      <IconButton aria-label="X" href="https://www.x.com/luciano64557229" target="_blank">
        <XIcon />
      </IconButton>
      <IconButton aria-label="Instagram" href="https://www.instagram.com/luchobernardotti" target="_blank">
        <InstagramIcon />
      </IconButton>
      <IconButton aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank">
        <LinkedInIcon />
      </IconButton>
    </div>
  );
};

export default Contact;
