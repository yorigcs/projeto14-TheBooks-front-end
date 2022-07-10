import { Route, Routes } from "react-router-dom";
import Home from '../screens/Home';
import AllBooks from '../screens/allBooks';
import CheckOut from '../screens/checkout'
import Book from '../screens/Book';
import SignUp from '../screens/signUp';
import SignIn from '../screens/signIn';

import MyProfile from "../screens/myProfile"
const PrivateRoutes = () => (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/allBooks' element={<AllBooks />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='book'>
            <Route path=':id' element={<Book />} />
        </Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>


        <Route path="/myProfile" element={<MyProfile />}></Route>
    </Routes>
)

export default PrivateRoutes;