
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Book = ({ id, name, image, price, amount }) => {
    let navigate = useNavigate();
    return (

        <BookInfo id={id} onClick={() => navigate(`/book/${id}`)} >
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <h3>{amount}</h3>
            <h2>{price}</h2>
        </BookInfo>
    )
}


const BookInfo = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 0.5rem;
    &:hover {
        background-color: white;
    }
    padding: 2rem 4rem;
    img {
        height: 4%;
        width: 4%;
    }
    
`
export default Book;