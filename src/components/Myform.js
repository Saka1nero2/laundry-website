import React , {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container}from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import './Myform.css';
import googleicon from '../assets/images/googleicon.png';
import facebookicon from '../assets/images/facebookicon.png';
import appleicon from  '../assets/images/appleicon.png';

const Myform = () =>{
  const navigate = useNavigate()
  const [data,setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const registerUser = async (e) => {
    e.preventDefault()
    const {name, email, password} = data
    try {
      const {data} = await axios.post('/register', {
        name, email, password
      })
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success(`Registration Successful. Welcome ${data.name}`)
        navigate("/")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return(
    <div className='user-account'>
      <div>
        <h4>Create Account</h4>
      </div>
      
      <Container className="login-container">
        <Form onSubmit={registerUser}>
        <Form.Group className="mb-2" controlId="formBasicName">
            <Form.Control type="text" placeholder="Enter Your Name" className='custom-input' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email Address" className='custom-input' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password"  className='custom-input' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
          </Form.Group>

          <Button variant="warning" type="submit" className='createAccountbutton'>
            Create Account
          </Button>

          <div className='formText'>or Login with</div>

          <div className='social-login'>
             <img src={googleicon} alt='Google' className='icon'/>
             <img src={facebookicon} alt='Facebook' className='icon'/>
             <img src={appleicon} alt='Apple' className='icon'/>
          </div>

          <Form.Text>
            By creating an account, you agree to our Terms and Conditions.
          </Form.Text><br/>
          <div className="nextAccount">
            Have an account? <RouterLink to="/login">Login</RouterLink>
          </div>
        </Form>
      </Container>
        
    </div>
  );
}

export default Myform;