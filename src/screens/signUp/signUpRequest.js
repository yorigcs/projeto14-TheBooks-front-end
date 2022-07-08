import axiosI from "../../services/axios";

const signUpRequest = async (signUpData, setLoading, setError, setSucess, setErrorMessage) => {
    setLoading(true);
    try {
        await axiosI.post("/sign-up", signUpData);
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

export default signUpRequest;