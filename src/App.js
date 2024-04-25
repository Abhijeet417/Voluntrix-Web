import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import  Home  from './components/VolunteerSection/Home';
import SignUpPage from './components/SignUpPage';
import Organizerpage from './components/OgranizerSection/Organizerpage';
import VolunteerPage from './components/VolunteerSection/VolunteerPage';
import { AppliedEventsProvider } from './components/VolunteerSection/AppliedEventsContext';
function App() {
  return (
    <div className="App">
        <>
        <BrowserRouter>
          <AppliedEventsProvider>  
          <Routes>
            <Route exact path='/' element={<LandingPage/>}/>
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
