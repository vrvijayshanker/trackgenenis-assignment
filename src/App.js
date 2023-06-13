import { Route, Routes} from 'react-router-dom';
import './App.css';
import ProductPage from './components/ProductPage';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
      <Header />
      {/* Routing------------------------ */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:pid' element={<ProductPage />} />
      </Routes>
      {/* Routing------------------------ */}
      <Footer />
    </div>
  );
}

export default App;
