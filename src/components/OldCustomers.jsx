import React, { useEffect, useState } from "react"
import API from "../api/api"

const OldCustomers = ({ setPage }) => {

  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const ownerId = localStorage.getItem("ownerId")

    if (!ownerId) {
      alert("Owner not logged in")
      setPage("login")
      return
    }

    API.get("/customer/by-owner", {
      params: { ownerId }
    })
      .then(res => {
        setCustomers(res.data)
      })
      .catch(err => {
        console.error(err)
        alert("Failed to load customers")
      })
  }, [])

  return (
    <div className="min-h-screen flex items-center px-10 text-white relative overflow-hidden
      bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">

      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="w-1/2 hidden md:flex justify-center z-10">
        <img
          src="https://illustrations.popsy.co/gray/customer-support.svg"
          alt="Customers"
          className="w-96 drop-shadow-2xl"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center z-10">
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-[500px]">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Old Customers
          </h2>

          {customers.length === 0 && (
            <p className="text-center text-gray-300">
              No customers found
            </p>
          )}

          {customers.map(c => (
            <div
              key={c.customerId}
              className="mb-4 p-4 bg-white/20 rounded-lg cursor-pointer
              hover:bg-white/30 transition"
              onClick={() => {
                localStorage.setItem("customerId", c.customerId)
                setPage("ledger")
              }}
            >
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm text-gray-300">{c.phone}</p>
            </div>
          ))}

          <button
            className="w-full mt-6 bg-gray-600 py-3 rounded-lg font-semibold
            hover:bg-gray-700 transition"
            onClick={() => setPage("ownerDashboard")}
          >
            ⬅ Back
          </button>

        </div>
      </div>
    </div>
  )
}

export default OldCustomers
