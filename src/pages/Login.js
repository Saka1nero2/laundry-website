import {React, useState} from 'react';
import axios from 'axios';
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import { Container,Row ,Col,Button,Form } from 'react-bootstrap';
import '../components/Login.css';

export default function Login(){
    const navigate = useNavigate()

    const [data,setData] = useState({
        email: "",
        password: ""
    })

    const loginUser = async (event) => {
        event.preventDefault();
        const {email,password} = data

        try {
            const {data} = await axios.post("/login", {
                email,
                password
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                navigate("/")
                toast.success("Welcome Back!")
            }
        } catch (error) {
            console.error(error)
        }
    }

    return(
    <Container className="mt-5">
         <Row className="justify-content-md-center">
            <Col xs={12} md={6} ms={6}>
                    <h2 className='text-center mb-4'>Login</h2>
                <Form onSubmit={loginUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control 
                            size='lg'
                            type="email" 
                            placeholder="Enter your email..." 
                            value={data.email} 
                            onChange={(event) => setData({ ...data, email: event.target.value })} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        
                        <Form.Control 
                            type="password" 
                            placeholder="Enter your password..." 
                            value={data.password} 
                            onChange={(event) => setData({ ...data, password: event.target.value })} 
                        />
                    </Form.Group>

                        <Button variant="warning" type="submit" className="login-button w-100">
                        Login
                        </Button>
                </Form>
                </Col>
            </Row>
        </Container>
        
         
        
    )
}
