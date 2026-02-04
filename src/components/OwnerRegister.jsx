import React, { useState } from "react"
import API from "../api/api"

const OwnerRegister = ({ setPage }) => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const registerOwner = async () => {

    if (!name || !phone || !email || !password || !confirmPassword) {
      alert("All fields are required")
      return
    }

    if (phone.length !== 10) {
      alert("Enter valid 10 digit phone number")
      return
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    try {
      const res = await API.post(
        `/owner/register`,
        {
          name,
          phone,
          email,
          password
        }
      )

      alert("Owner registered successfully")

      // backend se ownerId aayega
      localStorage.setItem("ownerId", res.data.ownerId)

      setPage("ownerDashboard")

    } catch (err) {
      alert("Registration failed")
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center px-10 text-white relative overflow-hidden
      bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">

      {/* GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* LEFT */}
      <div className="w-1/2 hidden md:flex justify-center z-10">
        <img
          src="https://illustrations.popsy.co/gray/business-analysis.svg"
          alt="Udhar Ledger"
          className="w-96 drop-shadow-2xl"
        />
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 flex justify-center z-10">
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-[440px]">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Owner Registration
          </h2>

          <input
            placeholder="Owner Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full mb-6 bg-transparent border-b-2 border-gray-400 py-2
            outline-none text-white placeholder-gray-300 focus:border-indigo-400"
          />

          <input
            placeholder="Phone Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full mb-6 bg-transparent border-b-2 border-gray-400 py-2
            outline-none text-white placeholder-gray-300 focus:border-indigo-400"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mb-6 bg-transparent border-b-2 border-gray-400 py-2
            outline-none text-white placeholder-gray-300 focus:border-indigo-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full mb-6 bg-transparent border-b-2 border-gray-400 py-2
            outline-none text-white placeholder-gray-300 focus:border-indigo-400"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="w-full mb-8 bg-transparent border-b-2 border-gray-400 py-2
            outline-none text-white placeholder-gray-300 focus:border-indigo-400"
          />

          <button
            className="w-full bg-green-600 py-3 rounded-lg text-lg font-semibold
            hover:bg-green-700 transition"
            onClick={registerOwner}
          >
            Register Owner
          </button>

          <p
            className="text-sm text-blue-300 mt-5 text-center cursor-pointer hover:underline"
            onClick={() => setPage('login')}
          >
            Already registered? Login
          </p>

        </div>
      </div>
    </div>
  )
}

export default OwnerRegister
