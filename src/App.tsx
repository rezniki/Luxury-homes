import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropertyPage from './pages/PropertyPage/PropertyPage';
import Favorites from './pages/Favorites/Favorites';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/property/:id' element={< PropertyPage/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
