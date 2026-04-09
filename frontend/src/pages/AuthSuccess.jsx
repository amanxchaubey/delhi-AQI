import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, ShieldAlert, Globe, ShieldCheck } from 'lucide-react';

const AuthSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUserFromToken } = useAuth();
  const [status, setStatus] = useState('authenticating'); // authenticating, success, error

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      try {
        // Store token and set user
        setUserFromToken(token);
        setStatus('success');
        
        // Brief delay for the success animation to show
        const timer = setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 1500);
        
        return () => clearTimeout(timer);
      } catch (error) {
        console.error('Auth error:', error);
        setStatus('error');
      }
    } else {
      setStatus('error');
    }
  }, [location, navigate, setUserFromToken]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#030712] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md px-8 py-12 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl shadow-2xl text-center"
      >
        {/* Branding */}
        <div className="flex items-center justify-center gap-2 mb-10 opacity-60">
          <Globe className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-black text-white uppercase tracking-widest">AQI Pro Secure</span>
        </div>

        <AnimatePresence mode="wait">
          {status === 'authenticating' && (
            <motion.div
              key="authenticating"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="relative mx-auto w-20 h-20">
                <div className="absolute inset-0 rounded-full border-t-4 border-blue-500 animate-spin" />
                <div className="absolute inset-2 rounded-full border-r-2 border-purple-500/50 animate-spin transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-blue-400 animate-pulse" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Verifying Identity</h2>
                <p className="text-gray-500 text-sm font-medium">Securing your session...</p>
              </div>
            </motion.div>
          )}

          {status === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="mx-auto w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </motion.div>
              </div>
              <div>
                <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Access Granted</h2>
                <p className="text-emerald-400/80 text-sm font-bold uppercase tracking-widest">Redirecting to Dashboard</p>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="mx-auto w-20 h-20 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                <ShieldAlert className="w-10 h-10 text-rose-400" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Access Denied</h2>
                <p className="text-rose-400/80 text-sm font-medium mb-6">Authentication failed. Please try logging in again.</p>
                <button
                  onClick={() => navigate('/login')}
                  className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  Return to Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Security Info */}
        <div className="mt-12 pt-8 border-t border-white/[0.05] flex items-center justify-center gap-3 grayscale opacity-30">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>
          <div className="text-left">
            <div className="text-[10px] font-black text-white uppercase tracking-tighter">Encrypted</div>
            <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Session Terminal</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthSuccess;