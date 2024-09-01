import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState(null);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('resume', resume);

        try {
            const response = await axios.post('/signup' , formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(response.data.message);
            window.alert("user registered successfully")
            navigate('/thank-you', { state: { name } });
        } catch (error) {
            if (error.response) {
                setMessage(`Error: ${error.response.data.message || 'Unable to register'}`);
            } else if (error.request) {
                setMessage('Error: No response from server');
            } else {
                setMessage(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200 mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign Up</h2>
            {message && <p className="text-center mb-4 text-red-500">{message}</p>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-5">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="resume">
                        Upload Resume (PDF only)
                    </label>
                    <input
                        type="file"
                        id="resume"
                        onChange={(e) => setResume(e.target.files[0])}
                        className="w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        accept=".pdf"
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
