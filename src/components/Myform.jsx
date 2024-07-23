import {React,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Myform.css';
import { Container} from 'react-bootstrap';
import {faGoogle, faFacebook, faApple} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD:src/components/Myform.js
import { Link as RouterLink } from 'react-router-dom';



const Myform = () =>{
  
=======
import { Link } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

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

>>>>>>> 5f61e6cd3e92b8babec58578042754dcbb14c932:src/components/Myform.jsx
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
              <FontAwesomeIcon icon={faGoogle} size='2x'  className='icon' />
              <FontAwesomeIcon icon={faFacebook} size='2x'  className='icon'/>
              <FontAwesomeIcon icon={faApple} size='2x' className='icon'/>
          </div>

          <Form.Text>
            By creating an account, you agree to our Terms and Conditions.
          </Form.Text><br/>
<<<<<<< HEAD:src/components/Myform.js
          <div className="nextAccount">
            Have an account? <RouterLink to="/loginpage">Login</RouterLink>
=======
          <div className='nextAccount'>
            Have an account? <Link to='/Login'>Login</Link>
>>>>>>> 5f61e6cd3e92b8babec58578042754dcbb14c932:src/components/Myform.jsx
          </div>
        </Form>
      </Container>
        
    </div>
  );
}

export default Myform;