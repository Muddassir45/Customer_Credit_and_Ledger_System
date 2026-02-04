import React, { useState } from 'react'
import API from "../api/api"

const Login = ({ setPage }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {

    if (!email || !password) {
      alert("Please enter email and password")
      return
    }

    try {
      const res = await API.post("/owner/login", null, {
        params: { email, password }
      })

      console.log("RESPONSE DATA:", res.data)

      if (res.data.status === "success") {
        localStorage.setItem("ownerId", res.data.ownerId)
        setPage('ownerDashboard')
      } else {
        alert("Invalid email or password")
      }

    } catch (err) {
      console.error(err)
      alert("Server error. Try again later.")
    }
  }

  return (
    /* UI SAME — NOT TOUCHED */
    <div className="min-h-screen flex items-center px-10 text-white relative overflow-hidden
      bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">

      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="w-1/2 hidden md:flex justify-center z-10">
        <img
          src="https://illustrations.popsy.co/gray/business-analysis.svg"
          alt="Udhar Ledger"
          className="w-96 drop-shadow-2xl"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center z-10">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-80">

          <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mb-3 p-2 rounded text-black outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full mb-4 p-2 rounded text-black outline-none"
          />

          <button
            className="w-full bg-indigo-600 py-2 rounded-lg hover:bg-indigo-700 transition"
            onClick={login}
          >
            Login
          </button>

          <div className="flex justify-between mt-4 text-xs">
            <p
              className="text-blue-300 cursor-pointer"
              onClick={() => setPage('forgot')}
            >
              Forgot Email?
            </p>

            <p
              className="text-green-300 cursor-pointer font-semibold"
              onClick={() => setPage('ownerRegister')}
            >
              Register Owner
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
