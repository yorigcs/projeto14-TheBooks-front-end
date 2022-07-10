import axiosI from "../../services/axios";

const requestOrder = async (orderData, signOut,sucess) => {

    try {
        const resp = await axiosI.post("/orders",orderData);
        if(resp.status === 201) {
            sucess();
        }
    } catch (err) {
        if(err.response.status === 401) {
            signOut();
        }
        console.log(err)
    }

}

export default requestOrder;