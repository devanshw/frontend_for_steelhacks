import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserDetails.css'; // Importing the CSS file for styling

const AddRate = () => {
  const [knowledge, setKnowledge] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isInPerson, setIsInPerson] = useState(false);
  const [isZoom, setIsZoom] = useState(false);
  const [availability, setAvailability] = useState(0);
  const [preparedness, setPreparedness] = useState(0);
  const [approachability, setApproachability] = useState(0);
  const [comments, setComments] = useState('');

  // Fetch TA names as suggestions based on the input from searchTerm
  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`http://localhost:3000/api/searchTAs?searchTerm=${searchTerm}`)
        .then((response) => {
          setSuggestions(response.data);
        })
        .catch((error) => {
          console.error('Error fetching TAs:', error);
        });
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    // Reset the form after submission
    setKnowledge(0);
    setPreparedness(0);
    setAvailability(0);
    setComments('');
    setSearchTerm('');
    setIsInPerson(false);
    setIsZoom(false);
  };

  return (
    <div className="user-details-container"> {/* Using CSS classes for styling */}
      <div className="user-info">
        <h2>Add Rating</h2>

        {/* Search Bar Section with Suggestions */}
        <div className="input-container">
          <input
            type="text"
            className="input-field"
            placeholder="Search for Teaching Assistant"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul>
            {suggestions.length > 0 && 
              suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion.name}</li>
              ))
            }
          </ul>
        </div>

        <div className="user-details">
          {/* Knowledge Input */}
          <label htmlFor="knowledge">Knowledge:</label>
          <input
            type="range"
            id="knowledge"
            min="0"
            max="10"
            value={knowledge}
            onChange={(e) => setKnowledge(Number(e.target.value))}
          />
          <span>{knowledge}/10</span>

          {/* Preparedness Input */}
          <label htmlFor="preparedness">Preparedness:</label>
          <input
            type="range"
            id="preparedness"
            min="0"
            max="10"
            value={preparedness}
            onChange={(e) => setPreparedness(Number(e.target.value))}
          />
          <span>{preparedness}/10</span>

          {/* Approachability Input */}
          <label htmlFor="approachability">Approachability:</label>
          <input
            type="range"
            id="approachability"
            min="0"
            max="10"
            value={approachability}
            onChange={(e) => setApproachability(Number(e.target.value))}
          />
          <span>{approachability}/10</span>

          {/* Availability Input */}
          <label htmlFor="availability">Availability:</label>
          <input
            type="range"
            id="availability"
            min="0"
            max="10"
            value={availability}
            onChange={(e) => setAvailability(Number(e.target.value))}
          />
          <span>{availability}/10</span>

          {/* Checkbox for inPerson and Zoom */}
          <div>
            <label>
              <input
                type="checkbox"
                name="inPerson"
                checked={isInPerson}
                onChange={(e) => setIsInPerson(e.target.checked)}
              />
              In Person
            </label>
            <label>
              <input
                type="checkbox"
                name="zoom"
                checked={isZoom}
                onChange={(e) => setIsZoom(e.target.checked)}
              />
              Zoom
            </label>
          </div>

          {/* Comments Section */}
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Add your comments here"
          />

          {/* Submit Button */}
          <button className="fetch-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRate;
