import styled from "styled-components";
import { useAuth } from "../../contexts/auth"
const Checkout = () => {
    const { signed } = useAuth();
    return (
        <Container>
            <Title>Finalizar Pedido</Title>
        </Container>
    )
}

export default Checkout;

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

const Title = styled.h1`
    font-size: 2rem;
    color: white;
    margin-bottom: 2rem;
`