import React from "react";
import img from  "../images/img3.jpg";

function Services() {
  return (
    <div className="container" style={containerStyle}>
      <div className="card mt-4" style={cardStyle}>
        <div className="card-body">
          <h2 style={titleStyle}>Our Services</h2>
          <p style={descriptionStyle}>
            We offer a wide range of services to help your business grow and thrive. Explore our services below to learn how we can support your goals.
          </p>

          <div style={servicesGridStyle}>
            <div style={serviceItemStyle}>
              <img src={img} alt="Web Development" style={imageStyle} />
              <h3 style={serviceTitleStyle}>Web Development</h3>
              <p style={serviceDescriptionStyle}>
                Custom websites built using the latest technologies, optimized for performance and user experience.
              </p>
            </div>
            <div style={serviceItemStyle}>
              <img src={img} alt="Mobile App Development" style={imageStyle} />
              <h3 style={serviceTitleStyle}>Mobile App Development</h3>
              <p style={serviceDescriptionStyle}>
                Native and cross-platform mobile apps designed to enhance user engagement and meet your business needs.
              </p>
            </div>
            <div style={serviceItemStyle}>
              <img src={img} alt="UI/UX Design" style={imageStyle} />
              <h3 style={serviceTitleStyle}>UI/UX Design</h3>
              <p style={serviceDescriptionStyle}>
                Beautiful, intuitive designs that prioritize user experience and accessibility across all devices.
              </p>
            </div>
           
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
  padding: '40px 0',
};

const cardStyle = {
  maxWidth: '900px',
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
  marginBottom: '2rem',
  color: '#6c757d',
};

const servicesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
};

const serviceItemStyle = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '5px',
  marginBottom: '1rem',
};

const serviceTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  color: '#007bff',
};

const serviceDescriptionStyle = {
  fontSize: '1rem',
  color: '#6c757d',
};

export default Services;
