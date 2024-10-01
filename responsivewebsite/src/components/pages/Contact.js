import React from "react";

function Contact() {
  return (
    <div className="container" style={containerStyle}>
      <div className="card mt-4" style={cardStyle}>
        <div className="card-body">
          <h2 style={titleStyle}>Get in Touch</h2>
          <p style={descriptionStyle}>
            Have any questions? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form style={formStyle}>
            <div style={inputGroupStyle}>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input type="text" id="name" style={inputStyle} placeholder="Your Name" />
            </div>

            <div style={inputGroupStyle}>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input type="email" id="email" style={inputStyle} placeholder="Your Email" />
            </div>

            <div style={inputGroupStyle}>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea id="message" rows="4" style={textareaStyle} placeholder="Your Message"></textarea>
            </div>

            <button type="submit" style={buttonStyle}>Send Message</button>
          </form>
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
  backgroundColor: '#f7f7f7',
};

const cardStyle = {
  maxWidth: '600px',
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

const descriptionStyle = {
  textAlign: 'center',
  fontSize: '1rem',
  marginBottom: '1.5rem',
  color: '#6c757d',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputGroupStyle = {
  marginBottom: '1rem',
};

const labelStyle = {
  fontSize: '1rem',
  color: '#495057',
  marginBottom: '0.5rem',
  display: 'block',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '5px',
  border: '1px solid #ced4da',
  outline: 'none',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '5px',
  border: '1px solid #ced4da',
  outline: 'none',
};

const buttonStyle = {
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  marginTop: '1rem',
  alignSelf: 'center',
};

export default Contact;
