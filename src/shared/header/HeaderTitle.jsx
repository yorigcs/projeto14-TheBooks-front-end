import styled from "styled-components"
import { Link } from "react-router-dom";
const HeaderTitle = ({children}) => {

    return <Title><Link to="/">{children}</Link></Title>
}

const Title = styled.h1`

    font-size: 2rem;
    font-family: 'Permanent Marker', cursive;
    a {
        text-decoration: none;
        color: white;
    }
`

export default HeaderTitle;