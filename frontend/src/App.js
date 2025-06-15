import './App.css';
import Home from './Home';
import {Route, Routes} from "react-router-dom"
import NavBar from './navbar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;


