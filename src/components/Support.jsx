import React from "react"

const Support = () => {
  return (
    <div className="min-h-screen flex items-center px-10 text-white bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">

      {/* LEFT IMAGE */}
      <div className="w-1/2 hidden md:flex justify-center">
        <img
          src="https://illustrations.popsy.co/gray/customer-support.svg"
          alt="Support"
          className="w-96"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-xl w-[420px] shadow-2xl">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Customer Support
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-5 bg-transparent border-b border-gray-400 py-2 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-5 bg-transparent border-b border-gray-400 py-2 outline-none"
          />

          <textarea
            rows="4"
            placeholder="Describe your issue"
            className="w-full mb-6 bg-transparent border-b border-gray-400 py-2 outline-none resize-none"
          />

          <button className="w-full bg-indigo-600 py-3 rounded font-semibold hover:bg-indigo-700">
            Submit
          </button>

        </div>
      </div>
    </div>
  )
}

export default Support
