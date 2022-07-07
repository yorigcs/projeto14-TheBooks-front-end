import { Link } from "react-router-dom";
import styled from "styled-components";

const AllBooksLink = () => {
    return (
        <Container>
            <Link to="/allBooks">Todos os livros</Link>
        </Container>
    )
}

const Container = styled.div`
    a {
        color: white;
        text-decoration: none;
    }
`;
export default AllBooksLink;

