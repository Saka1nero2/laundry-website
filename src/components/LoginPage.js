import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container} from 'react-bootstrap';
import {faGoogle, faFacebook, faApple} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage= () =>{
  
  return(
    <div className='user-account'>
        <div>
          <h4>Login</h4>
        </div>
      
      <Container className="login-container">
        
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email Address" className='custom-input'/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password"  className='custom-input'/>
          </Form.Group>

          <Button variant="warning" type="submit" className='createAccountbutton'>
            Log In
          </Button>

          <div className='formText'>or Login with</div>

          <div className='social-login'>
              <FontAwesomeIcon icon={faGoogle} size='2x'  className='icon' />
              <FontAwesomeIcon icon={faFacebook} size='2x'  className='icon'/>
              <FontAwesomeIcon icon={faApple} size='2x' className='icon'/>
          </div>

          <div className="nextAccount">
             <RouterLink to="/">Forgot password?</RouterLink>
          </div>
        </Form>
      </Container>
        
  
    </div>
  );

}

export default LoginPage