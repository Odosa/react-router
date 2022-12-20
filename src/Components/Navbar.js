import { NavLink } from "react-router-dom"
import { useAuth } from "./PrivateRoute"

export const Navbar = () => {
    const auth = useAuth()

    return (
        <nav>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/category'>
                Category
            </NavLink>
            <NavLink to='/product'>
                Products
            </NavLink>
            <NavLink to='/profile'>
                Profile
            </NavLink>
            {
                !auth.user && (
                    <NavLink to='/login'>
                        Login
                    </NavLink>
                )
            }
        </nav>
    )
}