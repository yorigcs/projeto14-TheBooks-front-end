import { useAuth } from "../../contexts/auth";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axiosI from "../../services/axios";
import Order from "./Order";

const MyOrders = () => {
    const [myOrders, setMyorders] = useState([]);
    const { userInfo, signOut } = useAuth();

    useEffect(() => {
        axiosI.post("/myOrders", { user: userInfo.email })
            .then((res) => {

                setMyorders(res.data);
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    signOut();
                }
            })
    }, []);
    useEffect(() => { console.log(myOrders) }, [myOrders]);

    return (
        <OrdersContainer>
            {myOrders.map((order) => <Order key={order._id} {...order} />)}
        </OrdersContainer>
    )
}

const OrdersContainer = styled.main`
    display:flex;
    flex-direction:column;
    gap: 0.5rem;
    padding: 2rem;

`;



export default MyOrders;