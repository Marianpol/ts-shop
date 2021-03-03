import React, { useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import './Login.scss';

const Login = () => {

    const [loginStatus, setLoginStatus] = useState<string>('');

    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const username = loginRef.current?.value;
        const password = passwordRef.current?.value;
 
        const result = await fetch('/api/user/login', {
            mode: 'cors',
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               username, password,
            })
        })

       const response = result.json();
        response.then((res) => {
            if(res.hasOwnProperty('token')){
                //    localStorage.setItem('token', res['token']);
                //    localStorage.setItem('username', username);
                //    history.push('/newest');
                //    history.go(0);
                console.log(res['token'])
            }
            if(res.hasOwnProperty('info')){
                setLoginStatus(res.info);
            }
            else{
                setLoginStatus('');
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <h2>Zaloguj się</h2>
                <form onSubmit={handleLogin}>
                    <TextField
                        inputRef={loginRef}
                        id="outlined-input"
                        label="Nazwa użytkownika"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        onClick={() => setLoginStatus('')}
                    />
                    <TextField
                        inputRef={passwordRef}
                        id="outlined-password-input"
                        type="password"
                        label="Hasło"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        onClick={() => setLoginStatus('')}
                    />
                    {loginStatus ? 
                        <p className="login-wrapper__login-status">
                            {loginStatus}
                        </p>
                        :null
                    }
                    <button className="login-wrapper__button">   
                        Zaloguj się
                    </button>
                </form>
                <p>
                    Nie posiadasz konta?
                </p>
                <Link to='/register'>
                    <button className="login-wrapper__button">Załóż konto</button>
                </Link>
            </div>
        </div>
    )
}

export default Login;