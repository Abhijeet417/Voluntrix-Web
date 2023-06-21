import './App.css';
import { Header } from './components/Header';
import { Events } from './components/Events';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Download } from './components/Download';
import { Login } from './components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
        <>
          <Header/>
          <Routes>
            <Route exact path='/' Component={() => {
              return (<>
                <About/>
                <hr class="featurette-divider"></hr>
                <Events/>
                <hr class="featurette-divider"></hr>
                <Download/>
              </>)
            }}></Route>
            <Route exact path='/login' Component={Login}></Route>
          </Routes>
          <Footer/>
        </>
    </div>
   </BrowserRouter>
  );
}

export default App;
