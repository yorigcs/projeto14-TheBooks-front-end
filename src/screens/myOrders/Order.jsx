
import { useState } from "react";
import styled from "styled-components";
import Book from "./Book";
const Order = ({ _id, books, purchasedAt }) => {
    const [showBooks, setShowBooks] = useState(false)
    return (

        <OrderContainer onClick={() => setShowBooks(!showBooks)} id={_id}>
            <OrderInfo>
                <h2>{`Pedido: ${_id}`}</h2>
                <h3>{`Comprado em: ${purchasedAt}`}</h3>
            </OrderInfo>

            <BooksContainer show={showBooks}>
                {books.map((book) => <Book key={book.id} {...book} />)}
            </BooksContainer>

        </OrderContainer>
    )
}

const BooksContainer = styled.div`
    margin-top: 1rem;
    border-top: solid 1px  rgba(208, 198, 198, 0.856);
    display: ${props => props.show ? "flex" : "none"};
    flex-direction: column;
`

const OrderInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const OrderContainer = styled.div`
    cursor: pointer;
    font-size: 0.75rem;
    padding: 1.5rem;
    min-height: 2rem;
    background-color: rgba(255, 255, 255, 0.856);
    &:hover {
        background-color: rgba(240, 230, 230, 0.856)
    }
    border-radius: 0.5rem;
    border: solid 1px blue
`
export default Order;