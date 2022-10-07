
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Copyright from './components/copyright/Copyright';
import ReactimageGallery from './pages/gallery/ReactimageGallery';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
      <Copyright/>
      <ReactimageGallery/>
    </div>
  );
}

export default App;
