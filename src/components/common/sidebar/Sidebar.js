import SidebarLinks from "./SidebarLinks"
import SidebarProjects from "./SidebarProjects"
import "./sidebar.css"

const Sidebar = ()=>{

    return(
        <div id='sidebar' className="sidebar_container">
        <SidebarLinks />
        <SidebarProjects />
        </div>
    )
    
}

export default Sidebar