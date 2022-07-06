import styled from "styled-components"
const HeaderTitle = ({children}) => (
    <Title>{children}</Title>
)

const Title = styled.h1`
    color: white;
    font-size: 2rem;
    font-family: 'Permanent Marker', cursive;

`

export default HeaderTitle;