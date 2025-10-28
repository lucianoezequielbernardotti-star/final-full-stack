import React from 'react';
import { Paper } from '@mui/material';

function Footer(props) {
    return (
        <Paper sx={{
            marginTop: 'auto',
            position: 'fixed',
            bottom: 0,
            width: '100%',
        }} square variant='outlined'>
            FOOTER
        </Paper>);    
}

export default Footer;