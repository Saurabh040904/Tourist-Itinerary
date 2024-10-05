import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Place from './pages/Home/Place.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/places/:id" element={<Place />} />
            </Routes>
        </Router>
    );
}

export default App;
