import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Myform.css';
import googleicon from '../assets/images/googleicon.png';
import facebookicon from '../assets/images/facebookicon.png';
import appleicon from '../assets/images/appleicon.png';

const Myform = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Replace with your actual Google Client ID
  const googleClientId = '251729959775-fbnq6nm38kofcmk3vmkh82f28v10dfvr.apps.googleusercontent.com'; 
  const redirectUri = 'https://laundryking.netlify.app'; // Replace with your actual redirect URI
  const scope = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
  const responseType = 'token';

  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&include_granted_scopes=true`;

  // Facebook OAuth configuration
  const facebookAppId = 'YOUR_FACEBOOK_APP_ID'; // Replace with your actual Facebook App ID
  const facebookRedirectUri = 'https://laundryking.netlify.app/'; // Replace with your actual redirect URI
  const facebookScope = 'email,public_profile';

  const facebookAuthUrl = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${facebookAppId}&redirect_uri=${facebookRedirectUri}&scope=${facebookScope}&response_type=token`;

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post('/register', { name, email, password });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success(`Registration Successful. Welcome ${data.name}`);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='user-account'>
      <div>
        <h4>Create Account</h4>
      </div>

      <Container className="login-container">
        <Form onSubmit={registerUser}>
          <Form.Group className="mb-2" controlId="formBasicName">
            <Form.Control type="text" placeholder="Enter Your Name" className='custom-input' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email Address" className='custom-input' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" className='custom-input' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
          </Form.Group>

          <Button variant="warning" type="submit" className='createAccountbutton'>
            Create Account
          </Button>

          <div className='formText'>or Login with</div>

          <div className='social-login'>
            <a href={googleAuthUrl}>
              <img src={googleicon} alt='Google' className='icon' />
            </a>
            <a href={facebookAuthUrl}>
              <img src={facebookicon} alt='Facebook' className='icon' />
            </a>
            <img src={appleicon} alt='Apple' className='icon' />
          </div>

          <Form.Text>
            By creating an account, you agree to our Terms and Conditions.
          </Form.Text><br />
          <div className="nextAccount">
            Have an account? <RouterLink to="/login">Login</RouterLink>
          </div>
        </Form>
      </Container>

    </div>
  );
}

export default Myform;