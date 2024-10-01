import React from "react";

function About() {
  return (
    <div className="container" style={containerStyle}>
      <div className="card mt-4" style={cardStyle}>
        <div className="card-body">
          <h2 style={titleStyle}>About Us</h2>
          <p style={textStyle}>
            We are a passionate team dedicated to providing the best solutions for our clients. With years of experience in various fields, we strive to deliver top-quality products and services that meet your needs.
          </p>
          <p style={textStyle}>
            Our mission is to create innovative and user-friendly solutions that make a difference in your business and personal life. We believe in continuous improvement and staying ahead of the curve in technology and customer service.
          </p>

          <div style={teamSectionStyle}>
            <h3 style={teamTitleStyle}>Our Team</h3>
            <p style={textStyle}>Meet the dedicated professionals who make it all happen:</p>
            <ul style={teamListStyle}>
              <li>John Doe - CEO</li>
              <li>Jane Smith - Lead Developer</li>
              <li>Emily Johnson - Project Manager</li>
              <li>Michael Brown - UI/UX Designer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f0f0f0',
};

const cardStyle = {
  maxWidth: '800px',
  width: '100%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  padding: '20px',
  backgroundColor: '#fff',
};

const titleStyle = {
  textAlign: 'center',
  fontSize: '2rem',
  marginBottom: '1.5rem',
  color: '#343a40',
};

const textStyle = {
  textAlign: 'justify',
  fontSize: '1rem',
  marginBottom: '1.5rem',
  color: '#6c757d',
};

const teamSectionStyle = {
  marginTop: '2rem',
};

const teamTitleStyle = {
  fontSize: '1.5rem',
  color: '#343a40',
  marginBottom: '1rem',
  textAlign: 'center',
};

const teamListStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
  color: '#6c757d',
};

export default About;
