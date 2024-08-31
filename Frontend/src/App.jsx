import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import ThankYou from './components/ThankYou';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route
                    path="/thank-you"
                    element={<ThankYouWrapper />}
                />
            </Routes>
        </Router>
    );
};

// Wrapper component to pass state to ThankYou component
const ThankYouWrapper = () => {
    const location = useLocation();
    const { name } = location.state || { name: 'Guest' };

    return <ThankYou name={name} />;
};

export default App;
