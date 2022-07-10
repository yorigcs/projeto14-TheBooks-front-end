import { TextField, Button } from "@mui/material";
import styled from "styled-components";
import { useState, useEffect } from "react";
import isValideData from "./isValideData";
import myProfileRequest from "./myProfileRequest";
import handleButtonMessage from "../../shared/buttons/handleButtonMessage";
import { useAuth } from "../../contexts/auth";

const MyProfile = () => {
    const { userInfo, signOut } = useAuth();
    const [passwordData, setPasswordData] = useState(
        {
            user: userInfo.email,
            oldPassword: "",
            newPassword: "",
        })
    //Input errors
    const [oldPasswordError, setOldPasswordError] = useState(null);
    const [newPasswordError, setNewPasswordError] = useState(null);

    //button messages
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChangeText = (e) => {
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value });

    }

    const handleSendData = () => {
        if (isValideData(passwordData, setOldPasswordError, setNewPasswordError)) {
          myProfileRequest(passwordData, signOut, setLoading, setError, setSucess, setErrorMessage);
        }
    }

    return (
        <Container>
            <ProfileContainer>

                <TextField
                    name="oldPassword"
                    label="Senha atual"
                    type="password"
                    value={passwordData.oldPassword}
                    onChange={handleChangeText}
                    error={!!oldPasswordError}
                    helperText={oldPasswordError}
                    variant="standard"
                />

                <TextField
                    name="newPassword"
                    label="Nova senha"
                    type="password"
                    value={passwordData.newPassword}
                    onChange={handleChangeText}
                    error={!!newPasswordError}
                    helperText={newPasswordError}
                    variant="standard"
                />
                <Button
                    onClick={handleSendData}
                    variant="contained">
                    {handleButtonMessage("ATUALIZAR", loading, error, sucess)}
                </Button>
                {errorMessage ? <ErrorContainer>{errorMessage}</ErrorContainer> : null}
            </ProfileContainer>


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

const ProfileContainer = styled.div`
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

export default MyProfile;