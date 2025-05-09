// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';   // existing landing page
import ProjectsPage from './pages/ProjectsPage';
import BioWatchPage from './pages/BioWatchPage';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <BrowserRouter>
            {/* You could include a common header/nav here if desired */}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/biowatch" element={<BioWatchPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
