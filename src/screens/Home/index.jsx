import TopBar from "../../shared/header";
import { MostRatedBooks } from "./MostRatedBooks";
import LastBooks from "./LastBooks";

const Home = () => {
    return (
        <>
            <TopBar />
            <MostRatedBooks />
            <LastBooks />
        </>
    )
}

export default Home;