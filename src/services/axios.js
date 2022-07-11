import axios from "axios";

const axiosI = axios.create(
    {
        baseURL: "https://the-books-store-driven.herokuapp.com"
    }
)
export default axiosI;