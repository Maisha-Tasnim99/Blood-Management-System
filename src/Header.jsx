import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="text-center  _p-4px  bg-b-t1l1a1 -shadow-xs text-l2-a1 _space-y-12px ">

            <p className="-fade-in -h3 font-cursive-2">Blood Management System</p>

            <div className="-fade-in-right _p-8px  _space-x-16px bg-b-t1l1a2">

            <NavLink className={navData => navData.isActive ? "navActive" : "" } to="/"> Home </NavLink>
 
            <NavLink className={navData => navData.isActive ? "navActive" : "" }  to="/patient"> Patient </NavLink>

            <NavLink className={navData => navData.isActive ? "navActive" : "" }  to="/donor"> Blood Donor </NavLink>
           
         </div>


        </header>
    )
}

export default Header
