import axiosI from "../../services/axios";
const myProfileRequest = async (passwordData,signOut, setLoading, setError, setSucess, setErrorMessage) => {
    setLoading(true);
    try {
        await axiosI.put("/updateProfile", passwordData);
        setLoading(false);
        setSucess(true);

    } catch (err) {
        setLoading(false);
        setError(true);
        setErrorMessage(err.response.data);
        if(err.response.status === 401) {
            //signOut();

        }
        setTimeout(() => {
            setError(false);
            setErrorMessage(null);
        }, 2500)
    }

}

export default myProfileRequest;