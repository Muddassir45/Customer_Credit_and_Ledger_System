import React, { useState } from 'react'

const ForgotEmail = ({ setPage }) => {
  const [showOtp, setShowOtp] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center px-10 text-white
      bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Recover Email
        </h2>

        {/* EMAIL INPUT */}
        <input
          type="email"
          placeholder="Enter Registered Email"
          className="w-full mb-6 p-2 rounded text-black outline-none
          focus:ring-2 focus:ring-indigo-500"
        />

        {!showOtp && (
          <button
            className="w-full bg-indigo-600 py-2 rounded-lg hover:bg-indigo-700"
            onClick={() => setShowOtp(true)}
          >
            Send OTP
          </button>
        )}

        {/* OTP SECTION */}
        {showOtp && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full mt-6 mb-4 p-2 rounded text-black outline-none
              focus:ring-2 focus:ring-green-500"
            />

            <button
              className="w-full bg-green-600 py-2 rounded-lg hover:bg-green-700"
            >
              Verify OTP
            </button>
          </>
        )}

        <p
          className="text-xs text-blue-300 mt-5 text-center cursor-pointer hover:underline"
          onClick={() => setPage('login')}
        >
          Back to Login
        </p>

      </div>
    </div>
  )
}

export default ForgotEmail
