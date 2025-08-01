import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(prev => !prev);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isLogin ? 'Login to Your Account' : 'Create a New Account'}
        </h2>

        <form className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          )}

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button onClick={toggleMode} className="text-blue-600 hover:underline">
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={toggleMode} className="text-blue-600 hover:underline">
                Login
              </button>
            </>
          )}
        </p>
      </motion.div>
    </div>
  );
};

export default LoginSignup;
