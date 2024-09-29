import React, { useState } from 'react';

const AddRating = () => {
  const [knowledge, setKnowledge] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isInPerson, setIsInPerson] = useState(false);
  const [isZoom, setIsZoom] = useState(false);
  const [availability, setAvailability] = useState(0);
  const [preparedness, setPreparedness] = useState(0);
  const [approachability, setApproachability] = useState(0);
  const [comments, setComments] = useState('');

  const handleInputChange = (e) => {
    setKnowledge(Number(e.target.value));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'inPerson') {
      setIsInPerson(checked);
    } else if (name === 'zoom') {
      setIsZoom(checked);
    }
  };

  const handleAvailabilityChange = (e) => {
    setAvailability(Number(e.target.value));
  };

  const handlePreparednessChange = (e) => {
    setPreparedness(Number(e.target.value));
  };

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleApproachabilityChange = (e) => {
    setApproachability(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Submitted Data:', {
      knowledge,
      preparedness,
      availability,
      approachability,
      isInPerson,
      isZoom,
      comments,
      searchTerm,
    });
    // Reset the form (optional)
    setKnowledge(0);
    setPreparedness(0);
    setAvailability(0);
    setComments('');
    setSearchTerm('');
    setIsInPerson(false);
    setIsZoom(false);
  };

  return (
    <div style={{ backgroundColor: '#FF8C00', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        backgroundColor: 'white',
        width: '600px', // Adjust the width as needed
        height: 'auto', // Adjust height to fit content
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Align items to the top
        alignItems: 'flex-start', // Align items to the left
        padding: '30px' // Added padding for better spacing
      }}>
        <h2 style={{ marginBottom: '20px' }}>Add Rating</h2>

        {/* Search Bar Section */}
        <div style={{ marginTop: '20px', width: '100%' }}>
          <label htmlFor="search" style={{ marginBottom: '5px', display: 'block' }}>Search Teaching Assistant:</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} // Styling for the search bar
          />
        </div>

        <div style={{ marginBottom: '10px', width: '100%' }}>
          <label htmlFor="knowledge" style={{ marginBottom: '5px', display: 'block' }}>Knowledge:</label>
          <input
            type="range"
            id="knowledge"
            min="0"
            max="10"
            value={knowledge}
            onChange={handleInputChange}
            style={{ width: '100%' }} // Full width for the slider
          />
          <span>{knowledge}/10</span>
        </div>

        <div style={{ marginBottom: '10px', width: '100%' }}>
          <label htmlFor="preparedness" style={{ marginBottom: '5px', display: 'block' }}>Preparedness:</label>
          <input
            type="range"
            id="preparedness"
            min="0"
            max="10"
            value={preparedness}
            onChange={handlePreparednessChange}
            style={{ width: '100%' }} // Full width for the slider
          />
          <span>{preparedness}/10</span>
        </div>

        <div style={{ marginBottom: '10px', width: '100%' }}>
          <label htmlFor="approachability" style={{ marginBottom: '5px', display: 'block' }}>Approachability:</label>
          <input
            type="range"
            id="approachability"
            min="0"
            max="10"
            value={preparedness}
            onChange={handleApproachabilityChange}
            style={{ width: '100%' }} // Full width for the slider
          />
          <span>{preparedness}/10</span>
        </div>

        {/* Availability Section */}
        <div style={{ marginBottom: '10px', width: '100%' }}>
          <label htmlFor="availability" style={{ marginBottom: '5px', display: 'block' }}>Availability:</label>
          <input
            type="range"
            id="availability"
            min="0"
            max="10"
            value={availability}
            onChange={handleAvailabilityChange}
            style={{ width: '100%' }} // Full width for the slider
          />
          <span>{availability}/10</span>

          {/* Checkbox Section */}
          <div style={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
            <label style={{ marginRight: '10px' }}>
              <input
                type="checkbox"
                name="inPerson"
                checked={isInPerson}
                onChange={handleCheckboxChange}
              />
              In Person
            </label>
            <label>
              <input
                type="checkbox"
                name="zoom"
                checked={isZoom}
                onChange={handleCheckboxChange}
              />
              Zoom
            </label>
          </div>
        </div>

        {/* Comment Section */}
        <div style={{ marginBottom: '10px', width: '100%' }}>
          <label htmlFor="comments" style={{ marginBottom: '5px', display: 'block' }}>Comments:</label>
          <textarea
            id="comments"
            value={comments}
            onChange={handleCommentChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', height: '60px' }} // Styling for the comments area
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#FF8C00', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddRating;