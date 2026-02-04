import React, { useEffect, useState } from "react"
import axios from "axios"

const CustomerDashboard = () => {

  const customerId = localStorage.getItem("customerId")
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(
      "http://localhost:8080/UdharLedgerBackend/api/customer/dashboard",
      { params: { customerId } }
    ).then(res => setData(res.data))
  }, [])

  if (!data) return <p className="text-white">Loading...</p>

  return (
    <div className="min-h-screen bg-[#0f2027] text-white p-10">
      <h1 className="text-3xl font-bold mb-4">Customer Dashboard</h1>

      <h2 className="text-xl mb-6">
        Total Expense: ₹ {data.totalExpense}
      </h2>

      <div className="bg-white/10 p-6 rounded-xl">
        {data.ledgerList.map(l => (
          <div key={l.ledgerId}
               className="flex justify-between border-b border-gray-600 py-2">
            <span>{l.itemDescription}</span>
            <span>₹ {l.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerDashboard
