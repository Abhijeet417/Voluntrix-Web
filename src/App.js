import './App.css';
import { Routes , Route , BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Events } from './components/Events';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Download } from './components/Download';
import { LoginPage } from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path='/' Component={() => {
                 return (<>
                   <About/>
                   <Events/>
                   <Download/>
                 </>) 
            }}></Route>
            <Route exact path='/Login-Page' Component={LoginPage}></Route>
          </Routes> 
          <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
