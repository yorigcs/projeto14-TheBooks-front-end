import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginButtonProfile = () => {
    let navigate = useNavigate();
    return (
        <ButtonContainer>
            <Button
                variant="contained"
                onClick={() => navigate("../signIn", { replace: true })}
            >LOG IN
            </Button>
        </ButtonContainer>

    )
}

const ButtonContainer = styled.div`
    padding: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default LoginButtonProfile