import './App.css';
import Home from './Home';
import {Route, Routes} from "react-router-dom"
import NavBar from './navbar';
import AddBooks from './BookActions/addbook';
import BookList from './BookActions/listall'; 
import ListBookbyId from './BookActions/listbyid';
import UpdateBook from './BookActions/updatebook';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addbook' element={<AddBooks />} />
        <Route path='/getallbooks' element={<BookList />} />
        <Route path='/listbyid/:id' element={<ListBookbyId />} />
        <Route path='/updatebook/:id' element={<UpdateBook/>} />
      </Routes>
    </div>
  );
}

export default App;


