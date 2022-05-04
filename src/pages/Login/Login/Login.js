import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if(loading){
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register')
    }
    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
        <div className='container login  mx-auto'>
            <h2 className='text-info text-center mt-2'>pleace login</h2>
            <Form onSubmit={handleSubmit}  >
                <Form.Group className="mb-3  " controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="info w-50 d-block mx-auto mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to fresh fruits  <Link to="/register" className='text-primary pe-auto text-decoration-none ' onClick={navigateRegister}>Please Register</Link> </p>
            <p>Forget Password?  <button  className='btn btn-link text-primary pe-auto text-decoration-none ' onClick={resetPassword}>Reset Password</button> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;