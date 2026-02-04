import React, { useState } from 'react'

const Register = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const registerOwner = () => {

    // ✅ FRONTEND VALIDATION
    if (!name || !phone || !email) {
      alert("Please fill all fields")
      return
    }

    // optional basic phone check
    if (phone.length < 10) {
      alert("Please enter valid phone number")
      return
    }

    // 👇 abhi backend call nahi likha
    // sirf validation test ke liye
    alert("Verification email sent (demo)")
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-800 text-white'>
      <div className='bg-black p-6 rounded w-80'>

        <h2 className='text-xl font-bold mb-4'>Register</h2>

        <input
          className='w-full p-2 mb-2 text-black'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          className='w-full p-2 mb-2 text-black'
          placeholder='Phone Number'
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

        <input
          className='w-full p-2 mb-4 text-black'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button
          className='bg-blue-600 w-full py-2'
          onClick={registerOwner}
        >
          Send Verification Email
        </button>

      </div>
    </div>
  )
}

export default Register
