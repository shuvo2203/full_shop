import React, { useEffect, useState } from 'react'
import { Outlet} from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../pages/userContext/UserContext';

const PrivateRoute = () => {

    const[ok, setOk] = useState(false);
    const[userAuth, setUserAuth] = useAuth();

    useEffect(()=>{
        const authCheck = async()=>{
            const res = await axios.get('http://localhost:5000/api/v1/loginVerify');
            if(res.data.ok){
                setOk(true);
            }else{
                setOk(false);
            }
        }
        if(userAuth.token){
            authCheck();
        }
    },[userAuth.token]);

  return (
    <>
        <div>
            {
                ok ? <Outlet /> : 'Loading...'
            }
        </div>
    </>
  )
}

export default PrivateRoute