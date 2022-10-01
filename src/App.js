import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Products from './components/Products';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div >
      <Navbar/>
      <Header/>
      <Products/>
      <SocialMedia/>
      <hr />
      <Footer/>


    </div>
  );
}

export default App;
