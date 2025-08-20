import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client (same as your frontend)
const supabase = createClient(
  'https://rycftadewrklmsswzviy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5Y2Z0YWRld3JrbG1zc3d6dml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxODA1MzUsImV4cCI6MjA2ODc1NjUzNX0.IPzOzYrGthMKXkj9glTHZ_T9e-25fbrjjJ6KAh7gwjg'
);

const Unsubscribe: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');
    
    if (!token) {
      setStatus('error');
      setMessage('Missing unsubscribe token');
      return;
    }

    // Handle unsubscribe directly using Supabase client
    const unsubscribe = async () => {
      try {
        console.log('Processing unsubscribe for token:', token);
        
        // Update the database directly
        const { data, error } = await supabase
          .from('waitlist_signups')
          .update({ 
            status: 'unsubscribed',
            confirmed_at: new Date().toISOString()
          })
          .eq('unsub_token', token)
          .select('email');

        if (error) {
          console.error('Supabase update error:', error);
          setStatus('error');
          setMessage('Failed to unsubscribe. Please try again.');
          return;
        }

        if (!data || data.length === 0) {
          setStatus('error');
          setMessage('Invalid unsubscribe token');
          return;
        }

        console.log('Successfully unsubscribed:', data[0].email);
        setStatus('success');
        setMessage(`Successfully unsubscribed ${data[0].email} from the waitlist`);
        
        // Redirect to success page after 2 seconds
        setTimeout(() => {
          navigate('/unsubscribe-success');
        }, 2000);
        
      } catch (error) {
        console.error('Unsubscribe error:', error);
        setStatus('error');
        setMessage('An error occurred. Please try again.');
      }
    };

    unsubscribe();
  }, [searchParams, navigate]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <img 
              src="/logo3.webp" 
              alt="Blendn Logo" 
              className="w-24 h-24 mx-auto"
            />
          </div>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Processing your unsubscribe request...</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <img 
              src="/logo3.webp" 
              alt="Blendn Logo" 
              className="w-24 h-24 mx-auto"
            />
          </div>
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg 
              className="w-8 h-8 text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Unsubscribe Failed</h1>
          <p className="text-gray-600 mb-6">{message}</p>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <img 
            src="/logo3.webp" 
            alt="Blendn Logo" 
            className="w-24 h-24 mx-auto"
          />
        </div>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Successfully Unsubscribed</h1>
        <p className="text-gray-600 mb-6">{message}</p>
        <p className="text-sm text-gray-500">Redirecting to confirmation page...</p>
      </div>
    </div>
  );
};

export default Unsubscribe;
