import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="relative flex items-center justify-center h-full bg-gray-900 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-8 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">Forgot Password</h2>

        {/* Info Text */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
          Enter your email address below and we'll send you a link to reset your password.
        </p>

        {/* Forgot Password Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-100"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600"
          >
            Send Reset Link
          </button>
        </form>

        {/* Optional Back to Login Link */}
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Remember your password?{' '}
          <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
