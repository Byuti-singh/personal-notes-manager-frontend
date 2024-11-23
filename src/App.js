import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditNotePage from './pages/EditNotePage';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/edit/:id" element={<EditNotePage />} />
            </Routes>
        </Router>
    );
};

export default App;
