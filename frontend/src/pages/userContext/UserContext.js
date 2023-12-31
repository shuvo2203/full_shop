import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const UserContext = ({children}) => {

    const[userAuth, setUserAuth] = useState({
        user:null,
        token:''
    });

    //default authorization
    axios.defaults.headers.common["Authorization"] = useAuth.token;

    useEffect(()=>{
      const userData = localStorage.getItem('auth');
      if(userData){
        const parseData = JSON.parse(userData);
        setUserAuth({...userAuth,user:parseData.user,token:parseData.token})
      }
    },[]);

  return (
    <div>
        <AuthContext.Provider value={[userAuth,setUserAuth]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

const useAuth=()=>useContext(AuthContext);

export {useAuth, UserContext}