import React, { useEffect, useState } from 'react'
import API from '../api/api'

// 🟦 Logo image (same as other pages)
import logo from '../assets/logo.png'  // <-- yahan apni logo file ka path lagana

const CustomerList = ({ setPage }) => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const ownerId = localStorage.getItem("ownerId")
    API.get(`/customer/by-owner?ownerId=${ownerId}`)
      .then(res => setCustomers(res.data))
      .catch(err => console.error(err))
  }, [])

  const selectCustomer = (id) => {
    localStorage.setItem("customerId", id)
    setPage('ledger')
  }

  // Back button
  const goBack = () => {
    setPage('dashboard')  // change kar sakte ho jis page pe jana hai
  }

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE PANEL (Logo + Back Button) */}
      <div className="w-1/4 bg-[#0b1220] flex flex-col items-center py-10">
        <img src={logo} alt="Logo" className="w-32 mb-10" />

        <button
          onClick={goBack}
          className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Back
        </button>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="w-3/4 p-10 text-white
        bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">

        <h2 className="text-3xl mb-6 font-bold">Old Customers</h2>

        {customers.map(c => (
          <div
            key={c.customerId}
            onClick={() => selectCustomer(c.customerId)}
            className="bg-white/10 p-4 mb-3 rounded cursor-pointer hover:bg-white/20"
          >
            <p className="font-semibold">{c.name}</p>
            <p className="text-sm">{c.phone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerList
