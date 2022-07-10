import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from "@mui/material";
import { useState, useEffect } from "react";
import axiosI from "../../services/axios";
import { useNavigate } from "react-router-dom";
const Search = () => {

    const [book, setBook] = useState("");
    const [listBooks, setListBooks] = useState([]);
    useEffect(() => {

        if (book.length === 0) {
            setListBooks([]);
            return;
        }
        axiosI.get(`/booksName/${book}`)
            .then((resp) => setListBooks(resp.data))
            .catch((err) => console.log(err));

    }, [book]);
    return (
        <SearchContainer>
            <TextField
                id="input-with-icon-textfield"
                sx={{ width: "100%" }}
                label="Procurar livros"
                value={book}
                onChange={(e) => setBook(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
            />
            {listBooks.map(book => <Book key={book._id} {...book} />)}
        </SearchContainer>

    )
}

const Book = ({ _id, image, name }) => {
    let navigate = useNavigate();
    return (
        <BookContainer id={_id} onClick={(e) => navigate(`/book/${e.currentTarget.id}`)}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </BookContainer>
    )
}

const SearchContainer = styled.div`
    width: 100%;
    margin-bottom: 2rem;

`;

const BookContainer = styled.div`
    background-color: #a27beb;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    width: 100%;
    &:hover {
        
    }
    img {
        width: 4%;
        height: 4%  
    }
    h2 {
        margin-left: 1.5rem;
    }
`;



export default Search;