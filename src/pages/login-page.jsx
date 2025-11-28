import React, {useState} from "react";
import { useAuth } from "../context/auth-context";
import { TextField, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login as logUser } from "../Api/producs-api";

const Login = ({ onLogin }) => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    const handleLogin = async (e) => {
        try {
            const response = await logUser({email: loginData.email, password: loginData.password});
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            login(token)
            if (onLogin && typeof onLogin === 'function') onLogin(user);
            navigate('/');
        } catch (error) {
            if (error.response.status === 401) {
                alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
            } else {
                alert('Error al iniciar sesión. Por favor, intenta más tarde.');
            }
        }
    }

    return (
        <Container maxWidth="sm" style={{ marginTop: '50px' }}>
            <h4>Iniciar Sesión</h4>
           <form>
            <TextField
                label="Email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                value={loginData.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
            >Login
            </Button>
           </form>
        </Container>
    );
}

export default Login;