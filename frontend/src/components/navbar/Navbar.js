import React from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../pages/userContext/UserContext';

function Navbar() {

    const [userAuth, setUserAuth] = useAuth();

    const logout=()=>{
        setUserAuth({...userAuth,user:null,token:''});
        localStorage.removeItem('auth');
    }

    return (
        <>
            <nav className="header navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">FullShop</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {
                            userAuth.user ? (
                                <>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to={`/dashboard/${userAuth.user.role==="admin"?"admin":"user"}`}>Dashboard <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" onClick={logout} to='/login'>Logout</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to='/cart'>Cart</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to='/register'>Signup <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to='/login'>Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to='/cart'>Cart</NavLink>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar