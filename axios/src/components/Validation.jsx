import { useState } from 'react';
import './Validation.css'
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';

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
        <div className="container-form">
            <form onSubmit={handleSubmit}>
                <h1>Validation</h1>
                <div className="input-box">
                    <label htmlFor="">Username</label>
                    <input type="text" name="username" onChange={getInput} />
                    {errorData.username && <small>{errorData.username}</small>}
                </div>
                <div className="input-box">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" onChange={getInput} />
                    {errorData.email && <small>{errorData.email}</small>}
                </div>
                <div className="input-box">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" onChange={getInput} />
                    {errorData.password && <small>{errorData.password}</small>}
                </div>
                <div className="input-box">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="password2" onChange={getInput} />
                    {errorData.password2 && <small>{errorData.password2}</small>}
                </div>
                <Button type='submit' variant="contained" color='error' sx={{width: "100%", marginTop: "10px"}}>Sing UP!</Button>
            </form>
        </div>
    );
}

export default Validation