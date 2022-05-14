import React from 'react';
import { Form } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LoginImg from '../../asset/login.png';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { googleSingIn, singInWithEmail, getEmail, getPassword, error } = useAuth();


    return (
        <div className='flex justify-center items-center h-screen w-screen'>
           <div>
               <img src={LoginImg} alt="" />
           </div>
           <div className='w-25'>
           <p className="text-danger text-center">{error}</p>
            <Form onSubmit={singInWithEmail} className="">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInpu">
                    <Form.Control
                        onBlur={getEmail} type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ContrlInput1">
                    <Form.Control
                        onBlur={getPassword} type="password" placeholder="Enter Your Password" />
                </Form.Group>
                <button className="bg-green-400 py-2 px-5 mb-3 rounded-md text-white text-2xl w">Log in</button> <br />
                <button className="bg-green-400 py-2 px-5 mb-3 rounded-md text-white text-xl" onClick={googleSingIn}>
                    <FaGoogle /> 
                </button><br />
                <Link to="/singup"><p  className='text-green-400 hover:text-green-700'>Don't have a account?Sing up</p></Link>
            </Form>
           </div>

        </div>
    );
};

export default Login;