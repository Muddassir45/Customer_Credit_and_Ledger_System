import React from 'react'

const Logout = ({ setLoggedIn }) => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-900 text-white'>
      <div className='bg-black p-6 rounded w-80'>
        <h2 className='text-xl font-bold mb-3'>Logout</h2>

        <p>Name: Demo User</p>
        <p>Phone: 9XXXXXXXXX</p>
        <p>Email: demo@email.com</p>

        <button
          className='bg-red-600 w-full py-2 mt-4'
          onClick={() => setLoggedIn(false)}
        >
          Confirm Logout
        </button>
      </div>
    </div>
  )
}

export default Logout
