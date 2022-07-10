import { ThreeDots } from "react-loader-spinner";
import sucessAnimation from "../../assets/lottie/sucess.json";
import errorAnimation from "../../assets/lottie/error.json";
import Lottie from "lottie-react";

const handleButtonMessage = (message, loading, error, sucess) => {
    if (loading) {
        return <ThreeDots width="2em" height="2em" color="white" />;
    } else if (error) {
        return <Lottie animationData={errorAnimation} loop="false" style={{ width: "2em", height: "2em" }} />;
    } else if (sucess) {
        return <Lottie animationData={sucessAnimation} loop="false" width="2em" style={{ width: "2em", height: "2em" }} />;
    } else {
        return message;
    }

}

export default handleButtonMessage;