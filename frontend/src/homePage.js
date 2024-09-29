import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterTA = () => {
  const navigate = useNavigate()
  const imageUrl = "https://i.ibb.co/fkw6TMy/Screenshot-2024-09-28-at-4-29-46-PM.png";
  const secondim = "https://i.ibb.co/tPLS7pn/Screenshot-2024-09-28-at-5-11-12-PM.png";
 const [isHoveredAddRegister, setIsHoveredAddRegister] = useState(false);
 const [isHoveredAddRating, setIsHoveredAddRating] = useState(false);

  return (
    <div style={{ backgroundColor: '#FFFDFD', height: '100vh', position: 'relative' }}>
       <button
        style={{
          position: 'absolute',
          top: '25px',
          left: '25px',
          backgroundColor: isHoveredAddRating ? 'darkorange' : 'orange',
          color: 'white',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          padding: '25px 30px',
          fontSize: '20px',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsHoveredAddRating(true)}
        onMouseLeave={() => setIsHoveredAddRating(false)}
        onClick={() => navigate('/addRating')}
      >
        Add Rating
      </button>

      <button
        style={{
          position: 'absolute',
          top: '25px',
          right: '25px',
          backgroundColor: isHoveredAddRegister ? 'darkorange' : 'orange',
          color: 'white',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          padding: '25px 30px',
          fontSize: '20px',
          cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHoveredAddRegister(true)}
      onMouseLeave={() => setIsHoveredAddRegister(false)}
     onClick={() => navigate('/newUser')}
    >
        Register as a TA
      </button>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '30px'}}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img 
             src={imageUrl} 
             alt="Teaching Assistant 1" 
             style={{ width: '250px', marginBottom: '10px' }} 
          />
          

        </div>

        

        <img 
          src={secondim} 
          alt="Teaching Assistant Additional" 
          style={{ width: '500px' }} 
          />
          
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
