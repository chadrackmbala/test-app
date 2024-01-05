import { Outlet } from "react-router-dom";
import Blog from "../pages/blog";
import HomePage from "../pages/home-page";
import Navabar from "./navbar";

export default function Layout() {
    return <>
        <Navabar />
        <Outlet />
    </>
}