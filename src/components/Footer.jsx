import React from 'react';
import Contact from './contact';


function Footer(props) {
    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: "100%",
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
            padding: '10px 0'
        }}>
            <Contact />
        </div>
    );
}

export default Footer;