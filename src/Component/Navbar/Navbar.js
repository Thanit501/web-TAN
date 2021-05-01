import navbar from "../Navbar/Navbar.css";
import { NavDropdown } from 'react-bootstrap';
import axios from "axios";
import React, { useState, useEffect } from "react";



const Navbar = () => {
   const [user, setUser] = useState({
   user_name: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:4500/api/Watcher/60854ac53e8fe75e0c69bdf6")
      .then((res) => {
        console.log(res);
        setUser(res.data);
      });
    // .catch((err) => {
    //   console.log(err);
    // });
  },[]);
//     return (
//         <>
        
//          <div className="Navbar Navbar-nav ml-auto  " >
//              <div>TAN Dashborad</div>
//             <NavDropdown title="Dropdown" id="nav-dropdown">
//             <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
//             <NavDropdown.Item eventKey="4.1">Logout</NavDropdown.Item>
//             </NavDropdown>
            
            
//          </div>

//     </>
      
//   );
// };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid">
                <div className=" navbar-nav ml-auto md=4" to="/">
                  TAN Dashborad
                </div>
                
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                    <li className="dropdown  mb-lg-0 col-12">
                      <NavDropdown title="Profile" id="nav-dropdown">
                      <NavDropdown.Item  href="/">Logout</NavDropdown.Item>
                      </NavDropdown>
                      

                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

    
                
  