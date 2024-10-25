import React,  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PGListingPage from './pages/PGListingPage';
import UserProfile from './pages/UserProfile';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BookingForm from './components/bookingForm';
import ReviewForm from './components/reviewForm';
import ContactUsPage from './pages/contactUsPage';
import OwnerDashboardPage from './pages/OwnerDashboardPage';
const App = () => {
    const [pgId] = useState('123');
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pglocations/:id" element={<PGListingPage />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/book-pg" element={<BookingForm />} />
                    <Route path="/leave-review" element={<ReviewForm pgId={pgId} />} />
                    <Route path="/contact" element={<ContactUsPage />} />
                    <Route path="/owner/dashboard" element={<OwnerDashboardPage />}/>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
