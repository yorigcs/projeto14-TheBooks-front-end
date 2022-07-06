import axios from "axios";

const axiosI = axios.create(
    {
        baseURL: "http://localhost:5000"
    }
)
export default axiosI;