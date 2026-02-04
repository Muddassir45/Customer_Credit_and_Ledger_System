import React, { useState } from "react"
import axios from "axios"

const CustomerLedger = ({ customer, setPage }) => {
  const [amount, setAmount] = useState("")

  const addExpense = async () => {
    if (!amount) return alert("Enter amount")

    await axios.post(
      "http://localhost:8080/UdharLedgerBackend/api/expense",
      null,
      {
        params: {
          customerId: customer.id,
          amount: amount,
          type: "DEBIT"
        }
      }
    )

    alert("Expense Added")
    setAmount("")
  }

  return (
    <div className="min-h-screen bg-[#0f2027] text-white p-10">
      <h2 className="text-3xl font-bold mb-2">{customer.name}</h2>
      <p className="text-gray-300 mb-6">{customer.phone}</p>

      <div className="bg-white/10 p-6 rounded-xl w-[350px]">
        <input
          type="number"
          placeholder="Expense Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full mb-4 p-3 rounded text-black"
        />

        <button
          onClick={addExpense}
          className="w-full bg-red-600 py-3 rounded font-semibold hover:bg-red-700"
        >
          ➕ Add Expense
        </button>
      </div>

      <button
        className="mt-6 bg-gray-600 px-6 py-2 rounded"
        onClick={() => setPage("ownerCustomers")}
      >
        ⬅ Back to Customers
      </button>
    </div>
  )
}

export default CustomerLedger
