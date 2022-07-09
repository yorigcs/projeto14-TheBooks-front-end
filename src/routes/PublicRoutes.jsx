import { Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import AllBooks from '../screens/allBooks';
import CheckOut from '../screens/checkout'
import Book from '../screens/Book';
import SignUp from '../screens/signUp';
import SignIn from '../screens/signIn';
import Cart from '../screens/Cart';

const PublicRoutes = () => (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/allBooks' element={<AllBooks />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='book'>
            <Route path=':id' element={<Book />} />
        </Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
    </Routes>
)
export default PublicRoutes;