import React from 'react';
import { motion } from 'framer-motion';
import API_BASE_URL from '../../api';

const SocialLogin = () => {
  return (
    <div className="mt-8">
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/5"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase tracking-widest">
          <span className="bg-[#050a18] px-4 text-gray-500 font-black">Or continue with</span>
        </div>
      </div>

      <div className="flex justify-center">
        <motion.a
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
          whileTap={{ scale: 0.98 }}
          href={`${API_BASE_URL}/auth/google`}
          className="flex items-center justify-center gap-3 px-8 py-3 rounded-2xl bg-white/[0.03] border border-white/5 transition-all group cursor-pointer min-w-[200px]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.273 0 3.191 2.691 1.245 6.655l4.021 3.11z"/>
            <path fill="#4285F4" d="M24 12.273c0-.873-.073-1.709-.218-2.527H12v4.818h6.745c-.291 1.564-1.182 2.891-2.509 3.782l3.909 3.036C22.427 19.345 24 16.036 24 12.273z"/>
            <path fill="#34A853" d="M16.236 18.345c-1.227.818-2.8 1.309-4.236 1.309-2.909 0-5.382-1.964-6.264-4.636l-4.021 3.11C3.664 22.091 7.555 24.545 12 24.545c3.345 0 6.136-1.091 8.182-2.982l-3.945-3.218z"/>
            <path fill="#FBBC05" d="M5.736 15.018A7.067 7.067 0 0 1 5.318 12c0-1.055.164-2.073.418-3.036L1.715 5.854A11.97 11.97 0 0 0 0 12c0 2.255.618 4.364 1.709 6.182l4.027-3.164z"/>
          </svg>
          <span className="text-xs font-black text-gray-300 group-hover:text-white uppercase tracking-widest">Continue with Google</span>
        </motion.a>
      </div>
    </div>
  );
};

export default SocialLogin;