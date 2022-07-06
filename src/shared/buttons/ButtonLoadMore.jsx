import styled from "styled-components";

const ButtonLoadMore = ({ onClick }) => (
    <Button>
        <button type="button" onClick={onClick}>
            Carregar mais...
        </button>
    </Button>
)
const Button = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    button {
    height: 2rem;
    width: 8rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #8DEFE8;
    color: #8D8EEE;
   }
`;

export default ButtonLoadMore;