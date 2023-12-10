import React, { useState } from 'react'
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[address, setAddress] = useState('');

    const navigate = useNavigate();

    const register=async(e)=>{
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/v1/register',{
            name,email,password,address
        });
        if(response.status===400){
            alert('Registration Failed');
        }else{
            alert('Registration Successfull');
            navigate('/login')
        }
    }

    return (
        <>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-4 mx-auto mt-3'>
                        <h3 className='text-center py-2'>Registration Form</h3>
                        <form onSubmit={register}>
                            <div className='mt-3'>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='form-control'
                                    onChange={(e)=>setName(e.target.value)}
                                />
                            </div>

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

                            <div className='mt-3'>
                                <input
                                    type='text'
                                    placeholder='Address'
                                    className='form-control'
                                    onChange={(e)=>setAddress(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-primary mt-3 btn-block'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register