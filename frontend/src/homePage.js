import React from 'react';

const RegisterTA = () => {
  const imageUrl = "https://ibb.co/YcsnV21"; // Use the specific URL for the image

  return (
    <div style={{ backgroundColor: '#FFFDFD', height: '100vh', position: 'relative' }}>
      <button
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: 'orange',
          color: 'white',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 15px',
          cursor: 'pointer'
        }}
      >
        Register as a TA
      </button>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img 
            src={imageUrl} 
            alt="Teaching Assistant 1" 
            style={{ width: '100px', marginRight: '10px' }} 
          />
          <img 
            src={imageUrl} 
            alt="Teaching Assistant 2" 
            style={{ width: '100px' }} 
          />
        </div>
        <input
          type="text"
          placeholder="Search for Teaching Assistant"
          style={{
            padding: '10px',
            width: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
        />
      </div>
    </div>
  );
};

export default RegisterTA;
