import { Outlet } from "react-router-dom";

export default function Blog() {
    return <div className="sidebar">
        <aside>
            <h2>Sidebar</h2>
        </aside>
        <main>
            <Outlet />
        </main>
    </div>
}