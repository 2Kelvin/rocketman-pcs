import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Footer from './components/Footer/Footer';
import Title from './components/Title/Title';
import Background from './components/TopBackground/Background';


function App() {
  return (
    <div className="App">
      <Background />
      <Title />
      <AllProducts />
      <Footer />
    </div>
  );
}

export default App;