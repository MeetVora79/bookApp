import './App.css';
import Home from './Home';
import AddBooks from './BookActions/addbook';
import {Route, Routes} from "react-router-dom"
import NavBar from './navbar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addbook' element={<AddBooks/>} />
      </Routes>
    </div>
  );
}  

export default App;


