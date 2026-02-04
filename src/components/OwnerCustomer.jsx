import React, { useEffect, useState } from "react"
import axios from "axios"

const OwnerCustomers = ({ setPage, setSelectedCustomer }) => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/UdharLedgerBackend/api/customer", {
      params: {
        ownerId: localStorage.getItem("ownerId")
      }
    }).then(res => setCustomers(res.data))
  }, [])

  return (
    <div className="min-h-screen bg-[#0f2027] text-white p-10">
      <h2 className="text-3xl font-bold mb-6">Your Customers</h2>

      {customers.length === 0 && (
        <p className="text-gray-300">No customers found</p>
      )}

      {customers.map(c => (
        <div
          key={c.id}
          className="bg-white/10 p-5 rounded-xl mb-4 cursor-pointer hover:bg-white/20"
          onClick={() => {
            setSelectedCustomer(c)
            setPage("customerLedger")
          }}
        >
          <h3 className="text-xl font-semibold">{c.name}</h3>
          <p className="text-gray-300">{c.phone}</p>
        </div>
      ))}

      <button
        className="mt-6 bg-gray-600 px-6 py-2 rounded"
        onClick={() => setPage("dashboard")}
      >
        ⬅ Back
      </button>
    </div>
  )
}

export default OwnerCustomers
