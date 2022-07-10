import styled from "styled-components";
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListIcon from '@mui/icons-material/List';

import { useCart } from '../../hooks/useCart'

const HeaderIcons = ({ setRenderProfile, setRenderOptions, setRenderCart }) => {
    const [colorProfile, setColorProfile] = useState(false);
    const [colorOptions, setColorOptions] = useState(false);
    const [colorCart, setColorCart] = useState(false);


    const { cart } = useCart();
    const cartSize = cart.length;

    const handleProfile = () => {
        setRenderProfile(profile => !profile);
        setRenderOptions(false);
        setRenderCart(false);
        setColorProfile(!colorProfile);
        setColorOptions(false);
        setColorCart(false);
    }

    const handleOptions = () => {
        setRenderOptions(options => !options);
        setRenderProfile(false);
        setRenderCart(false);
        setColorOptions(!colorOptions);
        setColorProfile(false);
        setColorCart(false);
    }

    const handleCart = () => {
        setRenderCart(cart => !cart);
        setRenderProfile(false);
        setRenderOptions(false);
        setColorCart(!colorCart);
        setColorProfile(false);
        setColorOptions(false);
    }


    return (
        <IconContainer>
            <IconStyle changeColor={colorProfile} onClick={handleProfile}>
                <PersonIcon sx={{ fontSize: 28 }} />
            </IconStyle>

            <IconStyle changeColor={colorCart} onClick={handleCart}>
                <ShoppingCartIcon  sx={{ fontSize: 28 }} />
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