import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListIcon from '@mui/icons-material/List';

import { useCart } from '../../hooks/useCart'

const HeaderIcons = ({ setRenderProfile, setRenderOptions }) => {
    let navigate = useNavigate()
    const [colorProfile, setColorProfile] = useState(false);
    const [colorOptions, setColorOptions] = useState(false);

    const { cart } = useCart();
    const cartSize = cart.length;

    const handleProfile = () => {
        setRenderProfile(profile => !profile);
        setRenderOptions(false);
        setColorProfile(!colorProfile);
        setColorOptions(false);
    }

    const handleOptions = () => {
        setRenderOptions(options => !options);
        setRenderProfile(false);
        setColorOptions(!colorOptions);
        setColorProfile(false);
    }


    return (
        <IconContainer>
            <IconStyle changeColor={colorProfile} onClick={handleProfile}>
                <PersonIcon sx={{ fontSize: 28 }} />
            </IconStyle>

            <IconStyle>
                <ShoppingCartIcon onClick={() =>navigate("/checkout", {replace: false}) } sx={{ fontSize: 28 }} />
                <span>{cartSize}</span>
            </IconStyle>

            <IconStyle changeColor={colorOptions} onClick={handleOptions}>
                <ListIcon sx={{ fontSize: 28 }} />
            </IconStyle>

        </IconContainer>
    )
}

const IconContainer = styled.div`
    display: flex;
    align-items:center;
    gap: 15px;
`;

const IconStyle = styled.div`
    color: ${props => props.changeColor ? "blue" : "white"};
    cursor: pointer;
    display: flex;
    align-items:center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background-color: black;

    position: relative;

    span {
        position: absolute;
        bottom: -5px;
        right: -5px;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem;
        background-color: red;
        border-radius: 50%;
    }
`;



export default HeaderIcons;