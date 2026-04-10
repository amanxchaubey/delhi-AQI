import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Loader2 } from 'lucide-react';

const AuthSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUserFromToken } = useAuth();

  useEffect(() => {
    try {
      // Try useLocation first, then window.location.search as fallback
      const search = location.search || window.location.search;
      const params = new URLSearchParams(search);
      const token = params.get('token');

      if (token) {
        console.log('Token found, authenticating...');
        // Store token and set user
        setUserFromToken(token);
        
        // Immediate redirect to dashboard
        navigate('/dashboard', { replace: true });
        
        // Safety fallback: if react-router doesn't navigate, force it
        setTimeout(() => {
          if (window.location.pathname === '/auth-success') {
            window.location.href = '/dashboard';
          }
        }, 2000);
      } else {
        console.warn('No token found in URL, redirecting to login');
        navigate('/login', { replace: true });
      }
    } catch (error) {
      console.error('Authentication success handling error:', error);
      navigate('/login', { replace: true });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050a18] flex flex-col items-center justify-center space-y-6">
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-t-2 border-blue-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-blue-400 animate-pulse" />
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-black text-white tracking-widest uppercase mb-2">Authenticating</h2>
        <p className="text-gray-500 text-sm font-bold tracking-wider">Signing you in...</p>
      </div>
    </div>
  );
};

export default AuthSuccess;