import axiosI from "../../services/axios";

const requestOrder = async (orderData, signOut) => {

    try {
        await axiosI.post("/orders",orderData);
    } catch (err) {
        if(err.response.status === 401) {
            signOut();
        }
        console.log(err)
    }

}

export default requestOrder;