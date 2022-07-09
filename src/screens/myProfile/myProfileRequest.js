
import axiosI from "../../services/axios";
const myProfileRequest = async (passwordData, setLoading, setError, setSucess, setErrorMessage) => {
    setLoading(true);
    try {
        await axiosI.put("/updateProfile", passwordData);
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

export default myProfileRequest;