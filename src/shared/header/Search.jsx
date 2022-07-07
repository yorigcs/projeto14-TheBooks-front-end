import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <SearchContainer>
            <SearchInput placeholder="Search" />
            <Icon>
                <SearchIcon fontSize="medium" />
            </Icon>
        </SearchContainer>

    )
}
const SearchContainer = styled.div`
    position: relative;

`;

const Icon = styled.div`
    position: absolute;
    top: 10%;
`;
const SearchInput = styled.input`
    border: none;
    border-radius: 1rem;
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 2.5rem;

`;

export default Search;