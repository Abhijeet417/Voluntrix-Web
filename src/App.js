import './App.css';
import { Header } from './components/Header';
import { Events } from './components/Events';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
        <>
          <Header/>
          <Events/>
          <Footer/>
        </>
    </div>
  );
}

export default App;
