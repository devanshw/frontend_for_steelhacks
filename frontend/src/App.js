import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewUser from './newUser'; // Your home component or other components
import Home from './homePage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newUser" element={<NewUser/>} />

        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;

