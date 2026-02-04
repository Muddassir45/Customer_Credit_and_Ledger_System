import React from "react"

const OwnerDashboard = ({ setPage }) => {
  return (
    <div className="min-h-screen flex items-center px-10 text-white relative overflow-hidden
      bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">

      {/* GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* LEFT IMAGE — SAME AS HOME */}
      <div className="w-1/2 hidden md:flex justify-center z-10">
        <img
          src="https://illustrations.popsy.co/gray/business-analysis.svg"
          alt="Udhar Ledger"
          className="w-96 drop-shadow-2xl"
        />
      </div>

      {/* RIGHT SIDE — SAME HOME CARD STYLE */}
      <div className="w-full md:w-1/2 z-10 text-right">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">

          <h2 className="text-4xl font-bold mb-4">
            Owner Dashboard
          </h2>

          <p className="text-sm mb-6 text-gray-200">
            Manage your customers & ledger
          </p>

          <div className="space-x-4">
            <button
              className="bg-green-600 px-6 py-2 rounded-lg hover:bg-green-700"
              onClick={() => setPage("addCustomer")}
            >
              ➕ Add Customer
            </button>

            <button
              className="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700"
              onClick={() => setPage("oldCustomers")}
            >
              👥 Old Customers
            </button>

            <button
              className="bg-gray-600 px-6 py-2 rounded-lg hover:bg-gray-700"
              onClick={() => setPage("home")}
            >
              ⬅ Back
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OwnerDashboard
