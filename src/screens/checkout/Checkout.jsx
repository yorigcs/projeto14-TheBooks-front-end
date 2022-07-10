import styled from "styled-components";
import { useAuth } from "../../contexts/auth";
import Cart from "../../shared/Cart"
const Checkout = () => {
    const { signed } = useAuth();
    return (
        <>
            <Container>
                <Title>Finalizar Pedido</Title>
            </Container>
            {signed ? <Cart isSigned={true} /> : <Cart to="/signIn" message="Faça login para continuar!" />}

        </>)

}

export default Checkout;

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 2rem;
    color: white;
    margin-bottom: 2rem;
`