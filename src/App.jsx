import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import CustomerLogin from './components/CustomerLogin'
import OwnerRegister from './components/OwnerRegister'
import About from './components/About'
import OwnerDashboard from './components/OwnerDashboard'
import CustomerDashboard from './components/CustomerDashboard'   // ✅ NEW
import Ledger from './components/Ledger'
import AddCustomer from './components/AddCustomer'
import ForgotEmail from './components/ForgotEmail'
import OldCustomers from './components/OldCustomers'
import Support from './components/Support'

const App = () => {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {

      case 'home':
        return <Home setPage={setPage} />

      case 'login':
        return <Login setPage={setPage} />

      case 'register':
        return <Register setPage={setPage} />

      case 'customerLogin':
        return <CustomerLogin setPage={setPage} />

      case 'customerDashboard':              // ✅ NEW CASE
        return <CustomerDashboard setPage={setPage} />

      case 'ownerRegister':
        return <OwnerRegister setPage={setPage} />

      case 'forgot':
        return <ForgotEmail setPage={setPage} />

      case 'ownerDashboard':
        return <OwnerDashboard setPage={setPage} />

      case 'addCustomer':
        return <AddCustomer setPage={setPage} />

      case 'ledger':
        return <Ledger setPage={setPage} />

      case 'oldCustomers':
        return <OldCustomers setPage={setPage} />

      case 'about':
        return <About setPage={setPage} />

        case 'support':
        return <Support setPage={setPage} />

      default:
        return <Home setPage={setPage} />
    }
  }

  return (
    <>
      <Header setPage={setPage} />
      {renderPage()}
      <Footer />
    </>
  )
}

export default App
