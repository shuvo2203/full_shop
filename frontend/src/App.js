import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import PrivateRoute from '../src/route/PrivateRoute';
import UserDashboard from '../src/user/UserDashboard';
import AdminDashboard from '../src/admin/AdminDashboard';
import AdminRoute from '../src/route/AdminRoute';
import  {useAuth}  from './pages/userContext/UserContext';

function App() {
 
  const[userAuth, setUserAuth] = useAuth();
  console.log(userAuth.user.role);
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {
          userAuth.user.role === "admin" ? <Route path='/dashboard' element={<AdminDashboard />} />
          :
          <Route path='/dashboard' element={<UserDashboard />} /> 
        }
        {/* private route */}
        {/* <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='user' element={<UserDashboard />} />
        </Route>
        <Route path='/dashboard' element={<AdminRoute />}>
          <Route path='admin' element={<AdminDashboard />} />
        </Route> */}
      </Routes>
    </>
  )
}

export default App; 
