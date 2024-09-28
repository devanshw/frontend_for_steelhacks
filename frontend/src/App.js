import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './newUser'; // Your home component or other components

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
