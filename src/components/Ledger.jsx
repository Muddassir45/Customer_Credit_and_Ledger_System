import React, { useEffect, useState } from 'react'
import API from "../api/api"

const Ledger = () => {
  const customerId = localStorage.getItem("customerId")

  const [items, setItems] = useState([])
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')

  useEffect(() => {
    API.get(`/ledger/by-customer?customerId=${customerId}`)
      .then(res => setItems(res.data))
  }, [])

  const addItem = async () => {
    await API.post("/ledger/add", null, {
      params: { customerId, desc, amount }
    })
    setItems([...items, { itemDescription: desc, amount }])
    setDesc('')
    setAmount('')
  }

  const total = items.reduce((s, i) => s + Number(i.amount), 0)

  return (
    <div className="min-h-screen flex justify-center items-center
      bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">

      <div className="bg-white/10 p-8 rounded-xl w-[480px]">

        <h2 className="text-2xl font-bold mb-4">Customer Ledger</h2>

        <input value={desc} onChange={e=>setDesc(e.target.value)}
          className="w-full mb-3 bg-transparent border-b" placeholder="Description"/>

        <input value={amount} onChange={e=>setAmount(e.target.value)}
          className="w-full mb-4 bg-transparent border-b" placeholder="Amount"/>

        <button onClick={addItem}
          className="w-full bg-green-600 py-2 rounded mb-4">
          Add Expense
        </button>

        {items.map((i, idx)=>(
          <p key={idx}>{i.itemDescription} — ₹{i.amount}</p>
        ))}

        <p className="mt-4 font-bold text-right">
          Total: ₹{total}
        </p>

      </div>
    </div>
  )
}

export default Ledger
