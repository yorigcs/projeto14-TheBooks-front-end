import styled from "styled-components";
import HeaderTitle from "./HeaderTitle";
import HeaderIcons from "./HeaderIcons";
import { useState } from "react";
import Search from "./Search";
import AllBooksLink from "./AllBooksLink";
import { useAuth } from "../../contexts/auth";
import LoginButtonProfile from "./LoginButtonProfile";
import ProfileUser from "./ProfileUser";

const TopBar = () => {
    const { signed } = useAuth();
    const [renderProfile, setRenderProfile] = useState(false);
    const [renderOptions, setRenderOptions] = useState(false);
    const getTypeOfRender = () => {
        if (renderProfile && !signed) {
            return (
                <NavBar>
                    <LoginButtonProfile />
                </NavBar>
            )
        }
        if (renderProfile && signed) {
            return (
                <NavBar>
                   <ProfileUser />
                </NavBar>
            )
        }
        if (renderOptions) {
            return (
                <NavBar>
                    <Search />
                    <AllBooksLink />
                </NavBar>
            )
        }

        return;
    }
    return (
        <Header>
            <HeaderTitle>TheBooks</HeaderTitle>
            <HeaderIcons
                setRenderProfile={setRenderProfile}
                setRenderOptions={setRenderOptions}
            />
            {getTypeOfRender()}
        </Header>
    )
}
const Header = styled.header`
    position: sticky;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    background-color: #a27beb;
    width: 100%;
    height: 4rem;
    z-index: 50;
`;

const NavBar = styled.nav`
    position: fixed;
    top: 4rem;
    right: 0;
    width: 100%;
    min-height: 10rem;
    box-shadow: inset 0 0.20rem 0 0 rgba(0,0,255,0.2);
    padding: 1rem;
    background-color: #787aeb;

`

export default TopBar;