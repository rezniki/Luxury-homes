import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Home/>
        <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
