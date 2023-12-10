import React,{useState} from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../userContext/UserContext';

function Login() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();
    const[userAuth, setUserAuth]=useAuth();

    const login=async(e)=>{
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/v1/login',{
            email,password
        });
        if(response.status===400){
            alert('invalid login details');
        }else{
            setUserAuth({...userAuth,user:response.data.user,token:response.data.token});
            localStorage.setItem('auth',JSON.stringify(response.data));
            navigate('/');
        }
    }

  return (
    <>
        <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-4 mx-auto mt-3'>
                        <h3 className='text-center py-2'>Login Form</h3>
                        <form onSubmit={login}>
                            <div className='mt-3'>
                                <input
                                    type='text'
                                    placeholder='Email'
                                    className='form-control'
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <div className='mt-3'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='form-control'
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-primary mt-3 btn-block'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Login