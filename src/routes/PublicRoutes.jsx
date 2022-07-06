import { Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';

const PublicRoutes = () => (
    <Routes>
        <Route path='/' element={<Home />}></Route>
    </Routes>
)
export default PublicRoutes;