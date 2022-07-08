import axiosI from "../../services/axios";
import { useAuth } from "../../contexts/auth";
const signInRequest = async (signInData, setLoading, setError, setSucess, setErrorMessage) => {
    const { setUserInfo } = useAuth();
    setLoading(true);
    try {
        const { data } = await axiosI.post("/sign-in", signInData);
        setUserInfo(data.user);
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