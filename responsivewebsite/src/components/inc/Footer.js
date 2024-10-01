import React from "react"; 

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={footerStyle}>
            <p style={textStyle}>© {currentYear} Your Company. All Rights Reserved.</p>
            <div style={socialIconsStyle}>
                <a href="https://www.facebook.com" style={iconLinkStyle}>Facebook</a>
                <a href="https://www.twitter.com" style={iconLinkStyle}>Twitter</a>
                <a href="https://www.instagram.com" style={iconLinkStyle}>Instagram</a>
            </div>
        </footer>
    );
}

const footerStyle = {
  backgroundColor: '#343a40',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
};

const textStyle = {
  margin: '0',
};

const socialIconsStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '10px',
};

const iconLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default Footer;
