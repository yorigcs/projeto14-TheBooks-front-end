import styled from "styled-components";
import axiosI from "../../services/axios";
import { useState, useEffect } from "react";
import ButtonLoadMore from "../../shared/buttons/ButtonLoadMore";
import { ThreeDots } from "react-loader-spinner";

const LastBooks = () => {
    const [lastBooks, setLastBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [numBooks, setNumBooks] = useState(4);

    useEffect(() => {
        setLoading(true)
        axiosI.get(`/books?numBooks=${numBooks}`)
            .then((res) => {
                setLastBooks(res.data);
                setLoading(false)
            })
            .catch((err) => console.error(err))
    }, [numBooks])

    const handleLoadMoreBooks = () => {
        setNumBooks(books => books + 4);
    }

    const getBooks = () => {
        if (loading) {
            return <ThreeDots width="4em" height="4em" color="white" />
        }

        return (
            lastBooks.map(book => (
                <RenderBook
                    key={book._id}
                    name={book.name}
                    image={book.image}
                    id={book._id}
                />
            ))
        )
    }


    return (
        <LastBooksContainer>
            <LastBooksTitle>Últimos adicionados</LastBooksTitle>
            <BooksContainer>
                {getBooks()}
            </BooksContainer>
            <ButtonLoadMore onClick={handleLoadMoreBooks} />
        </LastBooksContainer>
    )
}

const RenderBook = ({ id, name, image }) => (
    <Book id={id}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
    </Book>
)

const Book = styled.div`
    cursor: pointer;
    img {
        width: 8rem;
        height: 10.25rem;
    }
    h2 {
        text-align: center;
        width: 8rem;
    }
`;

const LastBooksContainer = styled.div`
    margin-top: 5rem;
    padding: 1rem 1.25rem;
    background-color: #8D8EEE;

`;
const BooksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1.50rem 0;
    justify-content: center;
    margin-top: 0.25rem;

`;

const LastBooksTitle = styled.h3`
    color: black;
`;
export default LastBooks;