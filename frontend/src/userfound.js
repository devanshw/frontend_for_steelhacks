import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Extract the firstName from the URL query string
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const firstName = queryParams.get('firstName');

  useEffect(() => {
    if (firstName) {
      handleFetchUser();
    }
  }, [firstName]);

  const handleFetchUser = async () => {
    if (!firstName) return;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await fetch('http://localhost:3000/api/getuserdetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'User not found');
      }

      setUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-details-container">
      
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {user && (
        <div className="user-info">
          <div className="user-profile">
            <h2>{user.firstName} {user.lastName}</h2>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
          
          <div className="user-details">
            <p><strong>Course Name:</strong> {user.courseName}</p>
            <p><strong>Department Name:</strong> {user.departmentName}</p>
            <p><strong>Knowledge of Subject:</strong> {user.averageKnowledgeOfSubject}/10</p>
            <p><strong>Approachability:</strong> {user.averageApproachability}/10</p>
            <p><strong>Preparedness:</strong> {user.averagePreparedness}/10</p>
            <p><strong>Availability:</strong> {user.averageAvailability}/10</p>
            <p><strong>Virtual:</strong> {user.virtual ? 'Yes' : 'No'}</p>
            <p><strong>In Person:</strong> {user.inPerson ? 'Yes' : 'No'}</p>
          </div>

          <div className="user-reviews">
            <h3>Reviews:</h3>
            <ul>
              {user.reviews.length > 0 ? (
                user.reviews.map((review, index) => (
                  <li key={index}>
                    <strong>{review.reviewerName}:</strong> {review.comment} <em>({new Date(review.ratingDate).toLocaleDateString()})</em>
                  </li>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
