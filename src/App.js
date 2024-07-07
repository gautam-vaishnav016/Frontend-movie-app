import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={
            <>
            <Banner/>
            <Movies/>
            </>
          } />
        </Routes>

    </BrowserRouter>
  
  );
}

export default App;
