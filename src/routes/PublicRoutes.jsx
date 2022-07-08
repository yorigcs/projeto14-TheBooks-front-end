import { Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import AllBooks from '../screens/allBooks';
import CheckOut from '../screens/checkout'
import Book from '../screens/Book';

const PublicRoutes = () => (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/allBooks' element={<AllBooks />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='book'>
            <Route path=':id' element={<Book />} />
        </Route>
    </Routes>
)
export default PublicRoutes;