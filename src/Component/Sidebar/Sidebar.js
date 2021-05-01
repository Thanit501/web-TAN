import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="Sidebar mb-4">
            <ul>
                {/* <li>
                    <NavLink to="/Profile" exact className="text-dark rounded py-2 w-100
                    d-inline-block px-3" activeClassName="aactive"> Profile</NavLink>
                        
                </li> */}
                <li>
                    <NavLink to="/User" exact className="text-dark rounded py-2 w-100 
                    d-inline-block px-3" activeClassName="aactive">  User</NavLink>
                </li>
{/* 
                <li>
                    <NavLink to="" exact className="text-dark rounded py-2 w-100 
                    d-inline-block px-3" activeClassName="aactive">  Logout</NavLink>
                </li> */}
            </ul>
        </div>
    )
};
export default Sidebar;