import React, { useState } from 'react';

const CustomerLogin = ({ setPage }) => {
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [msg, setMsg] = useState("");

  const BACKEND_URL = "http://localhost:8080/UdharLedgerBackend";

  const sendOtp = async () => {

    if (!contact) {
      setMsg("Please enter email or phone");
      return;
    }

    try {
      const res = await fetch(
        `${BACKEND_URL}/verify?action=sendOtp&contact=${encodeURIComponent(contact)}`,
        { method: "POST" }
      );

      const text = await res.text();
      setMsg(text);

      if (text === "OTP Sent") setShowOtp(true);

    } catch (err) {
      console.error(err);
      setMsg("Backend not reachable");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await fetch(
        `${BACKEND_URL}/verify?action=verifyOtp&contact=${encodeURIComponent(contact)}&otp=${otp}`,
        { method: "POST" }
      );

      const text = await res.text();
      setMsg(text);

      if (text.startsWith("OTP Verified")) {
        const customerId = text.split("|")[1];
        localStorage.setItem("customerId", customerId);
        localStorage.setItem("customerEmail", contact);
        setPage("customerDashboard");
      }

    } catch (err) {
      console.error(err);
      setMsg("Backend not reachable");
    }
  };

  return (
    <div className="min-h-screen flex items-center px-10 text-white relative overflow-hidden
      bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">

      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 blur-3xl opacity-30 animate-pulse"></div>

      <div className="w-1/2 hidden md:flex justify-center z-10">
        <img
          src="https://illustrations.popsy.co/gray/business-analysis.svg"
          alt="Udhar Ledger"
          className="w-96 drop-shadow-2xl"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center z-10">
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-[440px]">

          <h2 className="text-3xl font-bold mb-8 text-center">Customer Login</h2>

          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Email or Phone"
            className="w-full mb-8 bg-transparent border-b-2 border-gray-400 py-2
            outline-none text-white placeholder-gray-300 focus:border-indigo-400"
          />

          <button
            onClick={sendOtp}
            className="w-full bg-indigo-600 py-3 rounded-lg text-lg font-semibold
            hover:bg-indigo-700 transition"
          >
            Send OTP
          </button>

          {showOtp && (
            <>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                maxLength={6}
                className="w-full mt-6 mb-6 bg-transparent border-b-2 border-gray-400 py-2
                outline-none text-white placeholder-gray-300 focus:border-indigo-400"
              />
              <button
                onClick={verifyOtp}
                className="w-full bg-indigo-600 py-3 rounded-lg text-lg font-semibold
                hover:bg-indigo-700 transition"
              >
                Verify OTP
              </button>
            </>
          )}

          <p
            className="text-sm text-blue-300 mt-6 text-center cursor-pointer hover:underline"
            onClick={() => setPage('home')}
          >
            Back to Home
          </p>

          {msg && <p className="text-sm text-center mt-4">{msg}</p>}

        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
