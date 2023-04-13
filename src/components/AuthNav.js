import { NavLink } from "react-router-dom";


export default function AuthNav(){
    return(
        <nav>
        <NavLink to='/restered'>Registered</NavLink>
        <NavLink to='/sing-in'>Sing-in</NavLink>
        </nav>
    )
}