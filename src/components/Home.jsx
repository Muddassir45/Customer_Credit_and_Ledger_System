import React from 'react'

const Home = ({ setPage }) => {
  return (
    <div className="min-h-screen flex items-center px-10 text-white relative overflow-hidden
      bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">

      {/* GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

     {/* LEFT – IMAGE ONLY (same as About page) */}
<div className="w-1/2 hidden md:flex justify-center z-10">
  <img
    src="https://illustrations.popsy.co/gray/business-analysis.svg"
    alt="Udhar Ledger"
    className="w-96 drop-shadow-2xl"
  />
</div>


      {/* RIGHT */}
      <div className="w-full md:w-1/2 z-10 text-right">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">

          <h2 className="text-4xl font-bold mb-4">
            Udhar Ledger System
          </h2>

          <p className="text-sm mb-6 text-gray-200">
            Smart & secure digital ledger
          </p>

          <div className="space-x-4">
            <button
              className="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700"
              onClick={() => setPage('login')}
            >
              Owner Login
            </button>

           <button
  className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200"
  onClick={() => setPage('customerLogin')}   // ✅ CHANGED
>
  Customer Login
</button>


            {/* ✅ NEW REGISTER OWNER */}
           <button
  className="bg-green-600 px-6 py-2 rounded-lg hover:bg-green-700"
  onClick={() => setPage('ownerRegister')}
>
  Register Owner
</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
