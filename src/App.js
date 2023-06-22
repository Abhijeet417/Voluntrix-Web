import './App.css';
import { Header } from './components/Header';
import { Events } from './components/Events';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Download } from './components/Download';
import { Login } from './components/Login';
import { Stories } from './components/Stories';
import { NewsLetter } from './components/NewsLetter';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Home  from './components/VolunteerSection/Home';
function App() {
  return (
    <div className="App">
    
        <>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' Component={() => {
              return (<>
                <Header/>
                <About id="about"/>
                <hr class="featurette-divider"></hr>
                <Events id="features"/>
                <hr class="featurette-divider"></hr>
                <Stories/>
                <hr class="featurette-divider"></hr>
                <Download/>
                <hr class="featurette-divider"></hr>
                <NewsLetter/>
                <hr class="featurette-divider"></hr>
                <Footer/>
              </>)
            }}></Route>
            <Route exact path='/Home' Component={Home}/>
          </Routes>
        </BrowserRouter>
        </>
    </div>
  );
}

export default App;
