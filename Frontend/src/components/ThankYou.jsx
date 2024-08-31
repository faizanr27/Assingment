import React from 'react';
import PropTypes from 'prop-types';

const ThankYou = ({ name }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <p className="text-center font-bold text-gray-700">
                    Thank you , {name}! for applying. We have added you to the waitlist.
                </p>
            </div>
        </div>
    );
};

ThankYou.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ThankYou;
