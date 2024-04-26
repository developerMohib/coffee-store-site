
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink className={({ isActive}) => isActive ? "px-3 py-1 mx-1 border rounded-lg bg-gray-400 text-white " : "px-3 py-1 mx-1 border rounded-lg bg-base-100 "} to='/' > Home </NavLink>
            <NavLink className={({ isActive}) => isActive ? "px-3 py-1 mx-1 border rounded-lg bg-gray-400 text-white " : "px-3 py-1 mx-1 border rounded-lg bg-base-100 "} to='/addCoffe' > Add Coffee </NavLink>
            {/* <NavLink 
            className={({ isActive}) => isActive ? "px-3 py-1 mx-1 border rounded-lg bg-gray-400 text-white " : "px-3 py-1 mx-1 border rounded-lg bg-base-100 "} > Update Coffee </NavLink> */}
        </div>
    );
};

export default Navbar;