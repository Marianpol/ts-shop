import React, { useState } from 'react';
// import {useHistory} from 'react-router-dom';
import RegisterBox from './RegisterBox/RegisterBox';
// import SuccessfulInfo from './SuccessfulInfo/SuccessfulInfo';

// const StyledRegister = styled.section`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
// `

const Register = () => {

    const [registrationStatus, setRegistrationStatus] = useState({
        username: '',
        email: ''
    });
    const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
    // const history = useHistory();

    async function handleUserRegister(body: {[key: string]: string}) {

        const result = await fetch('/api/user/register', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(body)
        })

        const response = result.json();

        response.then((res) => {
            if(res.hasOwnProperty('info')){
                setRegistrationSuccessful(true);
            }
            else {
                setRegistrationStatus({
                    ...registrationStatus,
                    ...res,
                });
            }
        })
    }

    // useEffect(() => {
    //     if(localStorage.getItem('token')){
    //         history.push('/newest');
    //     }
    // }, [history])

    return (
        <>
            {registrationSuccessful ?
            null
                // <SuccessfulInfo
                //     info={"Konto zostało założone. Możesz się teraz zalogować."} 
                //     linkTo={'/login'}
                //     buttonText={"Zaloguj się"}
                // />
                :
                <section className="registration-box">
                    <div style={{maxWidth: '500px', width: "80%"}}>
                        <h1>Rejestracja</h1>
                        <RegisterBox
                            registrationStatus={registrationStatus}
                            handleUserRegister={handleUserRegister}
                            setRegistrationStatus={setRegistrationStatus}
                        />
                    </div>
                </section>
            }
        </>
    )
}

export default Register;