import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListIcon from '@mui/icons-material/List';


const HeaderIcons = ({ setRenderProfile, setRenderOptions }) => {
    const [colorProfile, setColorProfile] = useState(false);
    const [colorOptions, setColorOptions] = useState(false);

    const handleProfile = () => {
        setRenderProfile(profile => !profile);
        setRenderOptions(false);
        setColorProfile(!colorProfile);
    }

    const handleOptions = () => {
        setRenderOptions(options => !options);
        setRenderProfile(false);
        setColorOptions(!colorOptions);
    }


    return (
        <IconContainer>
            <IconStyle changeColor={colorProfile} onClick={handleProfile}>
                <PersonIcon sx={{ fontSize: 28 }} />
            </IconStyle>

            <IconStyle>
                <ShoppingCartIcon sx={{ fontSize: 28 }} />
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
`;



export default HeaderIcons;