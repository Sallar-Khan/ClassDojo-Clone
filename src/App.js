import './App.css';
import Home from '../src/containers/home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='App'>
       <Navbar />
     <Home />
     <Footer />
    </div>
  );
}

export default App;
