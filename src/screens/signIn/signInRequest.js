import axiosI from "../../services/axios";

const signInRequest = async (signInData, setLoading, setError, setSucess, setErrorMessage) => {
    setLoading(true);
    try {
        await axiosI.post("/sign-in", signInData);
        setLoading(false);
        setSucess(true);

    } catch (err) {
        setLoading(false);
        setError(true);
        setErrorMessage(err.response.data);
        setTimeout(() => {
            setError(false);
            setErrorMessage(null);
        }, 2500)
    }

}

export default signInRequest;