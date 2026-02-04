import React, { useState } from "react";
import API from "../api/api";

const RegisterCustomer = ({ setPage }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const saveCustomer = async () => {
    setError(""); // reset error

    // ✅ VALIDATION
    if (!name.trim() || !phone.trim()) {
      setError("Please fill all fields");
      return;
    }

    if (phone.length !== 10) {
      setError("Phone number must be 10 digits");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/customer/save", {
        name,
        phone,
      });

      if (res.data.status === "success") {
        alert("Customer saved successfully");
        setPage("ownerDashboard");
      } else {
        setError("Failed to save customer");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-4">Register Customer</h2>

        {/* ❌ ERROR MESSAGE */}
        {error && (
          <p className="text-red-600 mb-3 text-sm font-medium">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        />

        <button
          onClick={saveCustomer}
          disabled={loading}
          className={`w-full py-2 rounded text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Saving..." : "Save Customer"}
        </button>

      </div>
    </div>
  );
};

export default RegisterCustomer;
