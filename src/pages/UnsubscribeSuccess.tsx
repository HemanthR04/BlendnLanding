import React from 'react';
import { Link } from 'react-router-dom';

const UnsubscribeSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Logo */}
        <div className="mb-6">
          <img 
            src="/logo3.webp" 
            alt="Blendn Logo" 
            className="w-24 h-24 mx-auto"
          />
        </div>

        {/* Success Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg 
              className="w-8 h-8 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Successfully Unsubscribed
        </h1>
        
        <p className="text-gray-600 mb-6">
          You have been successfully unsubscribed from the Blendn waitlist. 
          You will no longer receive updates from us.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link
            to="/"
            className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
          >
            Back to Home
          </Link>
          
          <button
            onClick={() => window.close()}
            className="block w-full bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-200"
          >
            Close Window
          </button>
        </div>

        {/* Additional Info */}
        <p className="text-sm text-gray-500 mt-6">
          Changed your mind? You can always{' '}
          <Link to="/" className="text-purple-600 hover:underline">
            rejoin the waitlist
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default UnsubscribeSuccess;
