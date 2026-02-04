// ✅ UPDATED Header.jsx
import React from 'react'

const Header = ({ setPage }) => {
  return (
    <header className="bg-black text-white flex justify-between items-center p-4">

      {/* 🔰 LOGO + TITLE */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setPage('home')}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
          alt="Logo"
          className="w-8 h-8"
        />
        <h1 className="font-bold text-xl">
          Udhar Ledger
        </h1>
      </div>

      {/* 🔗 NAV */}
      <nav className="space-x-4 text-sm">
        <button onClick={() => setPage('login')} className="hover:text-gray-300">
          Login
        </button>
        <button onClick={() => setPage('about')}>About</button>
        <button onClick={()=> setPage('support')} className="hover:text-gray-300">Support</button>
      </nav>

    </header>
  )
}

export default Header
