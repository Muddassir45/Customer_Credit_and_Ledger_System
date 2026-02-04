import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen flex items-center px-10 text-white relative overflow-hidden
      bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">

      {/* GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 blur-3xl opacity-30 animate-pulse"></div>

      {/* LEFT */}
      <div className="w-1/2 hidden md:flex justify-center z-10">
        <img
          src="https://illustrations.popsy.co/gray/business-analysis.svg"
          alt="About"
          className="w-96 drop-shadow-2xl"
        />
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 z-10 text-right">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">

          <h2 className="text-4xl font-bold mb-4">
            About Udhar Ledger
          </h2>

          <p className="text-sm text-gray-200 leading-6">
            Udhar Ledger System helps small shopkeepers manage customer credit,
            expenses and payments digitally.  
            No paper, no confusion — full transparency for owner and customer.
          </p>

        </div>
      </div>
    </div>
  )
}

export default About
