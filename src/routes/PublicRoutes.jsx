import { Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import AllBooks from '../screens/allBooks';
import CheckOut from '../screens/checkout';
import SignUp from '../screens/signUp';
const PublicRoutes = () => (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/allBooks' element={<AllBooks />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
    </Routes>
)
export default PublicRoutes;