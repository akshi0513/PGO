import React from 'react';
import ContactForm from '../components/contactForm';

const ContactUsPage = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@company.com</p>
            <p>Address: 123 Main St, Anytown, USA</p>
            <ContactForm />
        </div>
    );
};

export default ContactUsPage;