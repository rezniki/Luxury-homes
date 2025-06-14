import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Home/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
