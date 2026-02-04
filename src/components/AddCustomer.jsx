import React, { useState } from "react";
import API from "../api/api";

const AddCustomer = ({ setPage }) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const saveCustomer = async () => {

    if (!name || !phone || !email) {
      alert("Please fill all fields");
      return;
    }

    if (phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    try {
      const ownerId = localStorage.getItem("ownerId");

      await API.post(
        `/customer/add?ownerId=${ownerId}&name=${name}&phone=${phone}&email=${email}`
      );

      alert("Customer added successfully ✅");
      setPage("ownerDashboard");

    } catch (error) {
      console.error(error);
      alert("Backend connection failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-4">Add Customer</h2>

        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* ✅ EMAIL FIELD – SAME UI */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        />

        <button
          onClick={saveCustomer}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Save Customer
        </button>

      </div>
    </div>
  );
};

export default AddCustomer;
