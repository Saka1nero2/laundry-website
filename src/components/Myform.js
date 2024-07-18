import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Myform.css';
import { Container} from 'react-bootstrap';
import {faGoogle, faFacebook, faApple} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Myform = () =>{
  return(
    <div className='user-account'>
      <div>
        <h4>Create Account</h4>
      </div>
      
      <Container className="login-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email Address" className='custom-input'/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password"  className='custom-input'/>
          </Form.Group>

          <Button variant="warning" type="submit" className='createAccountbutton'>
            Create Account
          </Button>

          <div className='formText'>or Login with</div>

          <div className='social-login'>
              <FontAwesomeIcon icon={faGoogle} size='2x'  className='icon' />
              <FontAwesomeIcon icon={faFacebook} size='2x'  className='icon'/>
              <FontAwesomeIcon icon={faApple} size='2x' className='icon'/>
          </div>

          <Form.Text>
            By creating an account, you agree to our Terms and Conditions.
          </Form.Text><br/>
          <div className='nextAccount'>
            Have an account? <Link to='/'>Login</Link>
          </div>
        </Form>
      </Container>
        
    </div>
  );
}

export default Myform;