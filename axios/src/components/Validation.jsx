import { useState } from 'react';
import './Validation.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Validation = ()=> {
    const [inputData, setInputData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errorData, setErrorData] = useState({})

    const getInput = (event)=> {
        setInputData({...inputData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        const {username, email, password, password2} = inputData
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
        const error = {}
        
        if(username === ''){
            error.username = "Username is Required"
        }

        if(email === ''){
            error.email = "Email is Required"
        } else if(!emailPattern.test(email)) {
            error.email = "Email didn't match"
        }

        if(password === ''){
            error.password = "Password is Required"
        } else if(!passwordPattern.test(password)){
            error.password = "Password didn't match"
        }

        if(password2 === ''){
            error.password2 = "Password is Required"
        } else if(!passwordPattern.test(password2) || password2 !== password){
            error.password2 = "Password didn't match"
        }
        setErrorData(error)
    }

    return (
        <div className='container-form'>
            <h1>Validation</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField type='text' label="Username" name="username" variant="outlined" helperText={errorData.username && errorData.username} onChange={getInput} />          
                <TextField type='email' label="Email" name="email" variant="outlined" helperText={errorData.email && errorData.email} onChange={getInput} />
                <TextField type='password' label="Password" name="password" variant="outlined" helperText={errorData.password && errorData.password} onChange={getInput} />
                <TextField type='password' label="Comfirm Password" name="password2" variant="outlined" helperText={errorData.password2 && errorData.password2} onChange={getInput} />
                <Button variant="contained" type='submit'>Register!</Button>
            </Box>
        </div>
    );
}

export default Validation