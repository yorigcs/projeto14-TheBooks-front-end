import { TextField, Button } from "@mui/material";
import styled from "styled-components";
import { useState, useEffect } from "react";
import isValideData from "./isValideData";
import signUpRequest from "./signUpRequest";
import handleButtonMessage from "../../shared/buttons/handleButtonMessage";


const SignUpForm = () => {
    const [signUpData, setSignUpdata] = useState(
        {
            name: "",
            email: "",
            cpf: "",
            password: "",
        })
    //Input errors
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [cpfError, setCpfError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    //button messages
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChangeText = (e) => {
        setSignUpdata({ ...signUpData, [e.target.name]: e.target.value });

    }

    const handleSendData = () => {
        if (isValideData(signUpData, setNameError, setEmailError, setCpfError, setPasswordError)) {
            signUpRequest(signUpData, setLoading, setError, setSucess, setErrorMessage);
        }
    }


    return (
        <Container>
            <SignUpContainer>
                <TextField
                    name="name"
                    label="Nome"
                    value={signUpData.name}
                    onChange={handleChangeText}
                    error={!!nameError}
                    helperText={nameError}
                    variant="standard"
                />

                <TextField
                    name="email"
                    label="Email"
                    value={signUpData.email}
                    onChange={handleChangeText}
                    error={!!emailError}
                    helperText={emailError}
                    variant="standard"
                />

                <TextField
                    name="cpf"
                    label="Cpf"
                    value={signUpData.cpf}
                    onChange={handleChangeText}
                    error={!!cpfError}
                    helperText={cpfError}
                    variant="standard"
                />

                <TextField
                    name="password"
                    label="Senha"
                    type="password"
                    value={signUpData.password}
                    onChange={handleChangeText}
                    error={!!passwordError}
                    helperText={passwordError}
                    variant="standard"
                />
                <Button
                    onClick={handleSendData}
                    variant="contained">
                    {handleButtonMessage("CADASTRAR", loading, error, sucess)}
                </Button>
                {errorMessage ? <ErrorContainer>{errorMessage}</ErrorContainer> : null}
            </SignUpContainer>


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

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
    border-radius: 0.5rem;
    background-color: white;
`

const ErrorContainer = styled.span`
    width:100%;
    color: red;
    display: flex;
    justify-content: center;
`;

export default SignUpForm;