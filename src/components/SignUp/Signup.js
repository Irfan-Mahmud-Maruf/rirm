import React from 'react';
import { Form } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LoginImg from '../../asset/login.png';
import useAuth from './../../Hooks/useAuth';

const Signup = () => {
    const {  googleSingIn, singUpWithEmail, error, getEmail, getPassword } = useAuth();
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
           <div>
           <img src={LoginImg} alt="" />
           </div>
           <div className='w-25'>
           <p className="text-danger text-center">{error}</p>
            <Form onSubmit={singUpWithEmail} className="">

                <Form.Group onBlur={getEmail} className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group onBlur={getPassword} className="mb-3" controlId="exampleForm.ControlInput">
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <button className="bg-green-400 py-2 px-5 mb-3 rounded-md text-white text-2xl">Register</button><br /> 
                <button className="bg-green-400 py-2 px-5 mb-3 rounded-md text-white text-xl" onClick={googleSingIn}>
                    <FaGoogle /> 
                </button><br /> 
                
                
                <Link to="/login"><p  className='text-green-400 hover:text-green-700'>Already have a account? Log in</p></Link>
            </Form>
           </div>
            </div>
    );
};

export default Signup;