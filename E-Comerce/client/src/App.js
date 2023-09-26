import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { userContext } from "./authantion/userContext"
import { PrivateRoute } from './PrivateRouter/PrivateRoute';
import Error from './pages/Error';
import ForgetPassword from './pages/forgetPassword';
import { LoginProtact } from './PrivateRouter/LoginProtact';
import AdminAuth from './PrivateRouter/AdminAuth';
import AdminDashboard from './pages/AdminDashboard';



function App() {
  const [user, setUser] = useState("")
  const [tokenData, setTokenData] = useState("");
  return (
    <userContext.Provider value={{ user, setUser, tokenData, setTokenData }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PrivateRoute>
            <About />
          </PrivateRoute>} />
          <Route path="/register" element={<LoginProtact>
            <Register />
          </LoginProtact>} />
          <Route path="/login" element={<LoginProtact>
            <Login />
          </LoginProtact>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="*" element={<Error />} />
          <Route path="/dashboard" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
                <Route path="/dashboard-admin" element={<PrivateRoute>
                  <AdminAuth>
            <AdminDashboard />
          </AdminAuth>
                </PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
