import { Routes, Route } from "react-router-dom"
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AddClient from "./pages/EditClient"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddClient />} />
      </Routes>
    </>
  )
}

export default App
