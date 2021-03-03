import React, {useState, useRef} from 'react';
import '../Register.scss';

type RegisterBoxProps = {
    registrationStatus: {
        username: string,
        email: string
    },
    handleUserRegister: (body: {[key: string]: string}) => void,
    setRegistrationStatus: (registrationStatus: {username: string, email: string}) => void,
}

const RegisterBox = ({
    registrationStatus:{
        username,
        email,
    },
    handleUserRegister,
    setRegistrationStatus,
}: RegisterBoxProps
) => {

    const [isRegisterDisabled, setIsRegisterDisabled] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    
    const registerRefs = {
        name: useRef<HTMLInputElement>(null),
        surname: useRef<HTMLInputElement>(null),
        username: useRef<HTMLInputElement>(null),
        email: useRef<HTMLInputElement>(null),
        password: useRef<HTMLInputElement>(null),
    }

    function checkInput(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        
        if(isEmailAddressValid()){
            const body = prepareFetchBody();
            handleUserRegister(body);
        }
        return;
    }

    function checkUsername(){
        if(username){
            setRegistrationStatus({
                username: '',
                email: ''
            });
        }
        checkIfFilled();
    }

    function checkEmailInput(){
        if(email){
            setRegistrationStatus({
                username: '',
                email: ''
            });
        }
        checkIfFilled();
        isEmailAddressValid();
    }

    function isEmailAddressValid(){
        const emailValue = registerRefs.email.current?.value || '';
        const isEmailValid = /\S+@\S+\.\S+/.test(emailValue);

        const isValidOrEmptyInput = isEmailValid || !emailValue;

        if(isValidOrEmptyInput){
            setIsEmailValid(true);
        }
        else {
            setIsEmailValid(false);
        }
        return isEmailValid;
    }

    function prepareFetchBody(){
        const body = {} as {[key: string]: string};

        Object.entries(registerRefs).forEach(([key,value]) => {
            body[key] = value.current?.value || '';
        })

        return body;
    }

    function checkIfFilled(){
        const areInputsEmpty = Object.values(registerRefs).map((ref) =>{
            if(ref.current?.value){
                return true;
            }
            return false;
        })

        const allInputsFilled = areInputsEmpty.every((value) => value === true);

        if(allInputsFilled && isEmailAddressValid()){
            setIsRegisterDisabled(false);
        }
        else {
            setIsRegisterDisabled(true);
        }
    }

    return (
        <form className="form">
            <input
                className="form__input"
                ref={registerRefs.name}
                placeholder="Imię"
                onChange={() => checkIfFilled()}
            />
            <input
                className="form__input"
                ref={registerRefs.surname}
                placeholder="Nazwisko"
                onChange={() => checkIfFilled()}
            />
            <input
                className="form__input"
                ref={registerRefs.username}
                placeholder="Nazwa użytkownika"
                onChange={() => checkUsername()}
                style={username ? {
                    outlineColor: 'red',
                    borderWidth: '2px',
                    borderColor: 'red',
                }:{
                    outlineColor: 'none',
                    borderWidth: '1px',
                    borderColor: 'black',
                }}
            />
            {username ? 
                <p className="form__fail-status">{username}</p>
            :null}
            <input
                className="form__input"
                ref={registerRefs.email}
                type="email"
                placeholder="Email"
                onChange={() => checkEmailInput()}
                style={email ? {
                    outlineColor: 'red',
                    borderWidth: '2px',
                    borderColor: 'red',
                }:{
                    outlineColor: 'none',
                    borderWidth: '1px',
                    borderColor: 'black', 
                }}
            />
            {email ? 
                <p className="form__fail-status">{email}</p>
            :null}
            {isEmailValid ? null: 
                <p>Podany adres email jest nieprawidłowy.</p>
            }
            <input
                className="form__input"
                ref={registerRefs.password}
                placeholder="Hasło"
                type="password"
                onChange={() => checkIfFilled()}
            />
            <button 
                className="form__button"
                disabled={isRegisterDisabled}
                onClick={(event) => checkInput(event)}
                style={isRegisterDisabled ? {
                    backgroundColor: 'white',
                    color: '#A07855',
                    cursor: 'default',
                }:{
                    color: 'white',
                }}
            >
                Załóż konto
            </button>
        </form>
    )
}

export default RegisterBox;