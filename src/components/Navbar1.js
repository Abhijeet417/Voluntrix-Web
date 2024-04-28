// import React,{ useState } from 'react'
// import logo from './Logo.jpg'
// import { Link} from 'react-router-dom'
// import './All_Styles/Navbar1.css'
// import ProfileDrawer from './ProfileDrawer'
// import { useUser } from './UserContext'


// export const Navbar1 = ({ setSearchQuery }) => {
//      const {user} = useUser();
//     const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
//     const [searchInput, setSearchInput] = useState("");
   
//     const HeaderStyle = {
//         color: "#8F43EE",backgroundColor: "#191825",height:"10%"
//     }
//     const buttonStyle = {
//         color : "#8F43EE",borderColor : "#8F43EE",margin: "0 10px"
//     }

//     const handleSearchInputChange = (event) => {
//     setSearchInput(event.target.value);
//     };

//     const handleSearchSubmit = (event) => {
//         event.preventDefault();
//         setSearchQuery(searchInput);
//     };
//   return (
//     <div className='nav1'>
//        <nav className="navbar navbar-expand-lg" style={HeaderStyle}>
//          <div className="container-fluid">
//             <Link class="navbar-brand">
//             <img src={logo} alt="Voluntrix" width="70" height="70" class="navbar-brand" to="/" style={{marginRight: "0"}}/>
//             </Link>
//             <form className="d-flex" style={{ width: '40%' }}onSubmit={handleSearchSubmit}>
//             <input
//               className="serarchBar me-3"
//               type="search"
//               placeholder="Search Your Event"
//               aria-label="Search"
//                value={searchInput}
//               onChange={handleSearchInputChange}
//             />
//             <button className="btn " style={{ color: 'grey' }} type="submit">
//               Search
//             </button>
//           </form>
//     <div className='d-flex'>
//         <img
//           src={user?.photoURL}
//           className='userProileImage'
//           alt="User Profile"
//           onClick={() => setIsProfileDrawerOpen(!isProfileDrawerOpen)}
//         />
//         <ProfileDrawer isOpen={isProfileDrawerOpen} />
//     </div>
//        </div>
//      </nav>
//     </div>
//   )
// }


import React, { useState } from 'react'
import logo from './Logo.jpg'
import { Link } from 'react-router-dom'
import './All_Styles/Navbar1.css'
import ProfileDrawer from './ProfileDrawer'
import { useUser } from './UserContext'
import SearchIcon from '@mui/icons-material/Search';


export const Navbar1 = (props) => {
    const { user } = useUser();
    const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

    const HeaderStyle = {
        color: "#8F43EE", backgroundColor: "#191825", height: "10%"
    };
    const buttonStyle = {
        color: "#8F43EE", borderColor: "#8F43EE", margin: "0 10px"
    };

    return (
        <div className='nav1'>
            <nav className="navbar navbar-expand-lg" style={HeaderStyle}>
                <div className="container-fluid">
                    <Link className="navbar-brand">
                        <img src={logo} alt="Voluntrix" width="70" height="70" className="navbar-brand" style={{ marginRight: "0" }} />
                    </Link>
                    <form className="d-flex" style={{ width: '40%' }} onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="searchBar me-3"
                            type="search"
                            placeholder="Search Your Event"
                            aria-label="Search"
                            value={props.searchQuery}
                            onChange={(e) => props.setSearchQuery(e.target.value)}
                        />
                        {/* <button className="btn " style={{ color: 'grey' }} type="submit">
                            Search
                        </button> */}
                        <SearchIcon type="submit"/>
                    </form> 
                    <div className='d-flex'>
                        <img
                            src={user?.photoURL}
                            className='userProileImage'
                            alt="User Profile"
                            onClick={() => setIsProfileDrawerOpen(!isProfileDrawerOpen)}
                        />
                        <ProfileDrawer isOpen={isProfileDrawerOpen} />
                    </div>
                </div>
            </nav>
        </div>
    )
}



