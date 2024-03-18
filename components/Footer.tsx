import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#1E2537',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
  };

  const listItemStyle = {
    display: 'inline-block',
    margin: '0 15px',
    textDecoration: 'none',
    color: '#fff',
    transition: 'color 0.3s ease',
    fontSize: '14px',
    fontWeight: 'bold',
  };

  const listItemHoverStyle = {
    color: '#FFB800',
  };

  return (
    <footer style={footerStyle}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={listItemStyle}><a href="#" style={listItemStyle}>Home</a></li>
        <li style={listItemStyle}><a href="#" style={listItemStyle}>Shop</a></li>
        <li style={listItemStyle}><a href="#" style={listItemStyle}>About Us</a></li>
        <li style={listItemStyle}><a href="#" style={listItemStyle}>Contact Us</a></li>
      </ul>
      <p style={{ marginTop: '20px' }}>&copy; {new Date().getFullYear()} Fuala. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
