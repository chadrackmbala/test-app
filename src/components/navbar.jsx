import { NavLink } from "react-router-dom";

export default function Navabar() {
    return <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>
}