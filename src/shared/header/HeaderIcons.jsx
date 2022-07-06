import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { BsList } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";


const HeaderIcons = () => {
    return (
        <IconStyle>
            <FaUserCircle size="2em" color="white" />
            <HiShoppingCart size="2em" color="white" />
            <BsList size="2em" color="white" />
        </IconStyle>
    )
}

const IconStyle = styled.div`
    display: flex;
    align-items:center;
    gap: 15px;
`;

export default HeaderIcons;