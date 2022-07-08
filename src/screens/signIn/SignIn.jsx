import { TextField, Button } from "@mui/material";
import styled from "styled-components";
import { useState, useEffect } from "react";
import isValideData from "./isValideData";
import signInRequest from "./signInRequest";
import handleButtonMessage from "../../shared/buttons/handleButtonMessage";
import { Link } from "react-router-dom";


const SignUpForm = () => {
    const [signInData, setSignIndata] = useState(
        {
            email: "",
            password: ""
        })
    //Input errors  
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    //button messages
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChangeText = (e) => {
        setSignIndata({ ...signInData, [e.target.name]: e.target.value });

    }

    const handleSendData = () => {
        if (isValideData(signInData, setEmailError, setPasswordError)) {
            signInRequest(signInData, setLoading, setError, setSucess, setErrorMessage);
        }
    }


    return (
        <Container>
            <SignInContainer>

                <TextField
                    name="email"
                    label="Email"
                    value={signInData.email}
                    onChange={handleChangeText}
                    error={!!emailError}
                    helperText={emailError}
                    variant="standard"
                />

                <TextField
                    name="password"
                    label="Senha"
                    type="password"
                    value={signInData.password}
                    onChange={handleChangeText}
                    error={!!passwordError}
                    helperText={passwordError}
                    variant="standard"
                />
                <Button
                    onClick={handleSendData}
                    variant="contained">
                    {handleButtonMessage("LOGIN", loading, error, sucess)}
                </Button>
                {errorMessage ? <ErrorContainer>{errorMessage}</ErrorContainer> : null}
                <LinkContainer>
                <h2>Não possui uma conta?</h2>
                <Link to="/signup">Cadastre-se</Link>
                </LinkContainer>
            </SignInContainer>


        </Container>

    )
}

const Container = styled.main`
    margin-top: 2rem;
    min-height: 10rem;
    position:relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
      
`;

const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
    border-radius: 0.5rem;
    background-color: white;
`

const ErrorContainer = styled.span`
    font-size: 0.75rem;
    color: red;
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
`;

const LinkContainer = styled.span`
    font-size: 0.75rem;
    display: flex;
    justify-content: space-between;
    h2 {
        color: gray
    }
    a {
        text-decoration: none;
    }
`;

export default SignUpForm;