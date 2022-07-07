import TopBar from "../../shared/header";
import { MostRatedBooks } from "./MostRatedBooks";
import LastBooks from "./LastBooks";
import { BestSellersBooks } from "./BestSellersBooks";

const Home = () => {
    return (
        <>
            <TopBar />
            <MostRatedBooks />
            <LastBooks />
            <BestSellersBooks />
        </>
    )
}

export default Home;