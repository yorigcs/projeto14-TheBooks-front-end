import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

const ProfileUser = () => {
    const { userInfo, signOut } = useAuth();
    return (
        <Container>
            <h2>{`Olá, ${userInfo.name}!`}</h2>
            <Link to="/myProfile">Meu perfil</Link>
            <Link to="/">Minhas compras</Link>
            <span onClick={signOut}>Sair</span>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    a, span{
        cursor: pointer;
        text-decoration: none;
        color: white;
    }


`;
export default ProfileUser;