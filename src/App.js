import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Events } from './components/Events';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Download } from './components/Download';
import { Stories } from './components/Stories';
import { Contact } from './components/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Home  from './components/VolunteerSection/Home';
import SignUpPage from './components/SignUpPage';
import Organizerpage from './components/OgranizerSection/Organizerpage';
import VolunteerPage from './components/VolunteerSection/VolunteerPage';
import { AppliedEventsProvider } from './components/VolunteerSection/AppliedEventsContext';
function App() {

  const [appliedEvents, setAppliedEvents] = useState([]);
  return (
    <div className="App">
    
        <>
        <BrowserRouter>
          <AppliedEventsProvider>
            
          <Routes>
            <Route exact path='/' Component={() => {
              return (<>
              <div style={{ overflowX: 'hidden'}}>

                <Header/>
                <About id="about"/>
               
                <Events id="features"/>
                <hr className='divider' />
                <Stories/>
                {/* <hr class="featurette-divider" style={{margin : "0",height: "2px", borderRadius: "1px",}}></hr>
                <Download/> */}
                <hr className='divider' />
                 <Contact id="c"/>
                 <hr className='divider' />
                <Footer/>
              </div>
              </>)
            }}></Route>
            <Route exact path='/Home' element={<Home/>}/>
            {/* <Route exact path='/signup' Component={SignUpPage}/> */}
            <Route exact path='/organizerpage' element={<Organizerpage />} />
            <Route exact path='/volunteerPage' element={<VolunteerPage/>}/>
          </Routes>
          </AppliedEventsProvider>
        </BrowserRouter>
        </>
    </div>
  );
}

export default App;
