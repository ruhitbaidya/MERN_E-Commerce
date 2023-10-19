import { useState, useEffect } from 'react';
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
import SearchPage from './pages/SearchPage';
import CardPage from './pages/CardPage';




function App() {
  const [user, setUser] = useState("")
  const [tokenData, setTokenData] = useState("");
  const [sproduct, setSProduct] = useState("")
  const [card, setCard] = useState([])
  useEffect(()=>{
    const finditem = localStorage.getItem("cardItem")
    if(finditem){
      setCard(JSON.parse(finditem))
    }
  }, [])
  return (
    <userContext.Provider value={{ user, setUser, tokenData, setTokenData, sproduct, setSProduct, card, setCard }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<PrivateRoute>
            <CardPage />
          </PrivateRoute>} />
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
          <Route path="/search" element={<SearchPage />} />
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
