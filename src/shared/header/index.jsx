import styled from "styled-components";
import HeaderTitle from "./HeaderTitle";
import HeaderIcons from "./HeaderIcons";

const TopBar = () => (
    <Header>
        <HeaderTitle>TheBooks</HeaderTitle>
        <HeaderIcons />
    </Header>
)
const Header = styled.header`
    position: sticky;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    background-color: #A27BEB;
    width: 100%;
    height: 4rem;
    z-index: 50;
`;

export default TopBar;