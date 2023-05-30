import SidebarLinks from "./SidebarLinks"
import SidebarProjects from "./SidebarProjects"
import "./sidebar.css"
import { useSelector } from 'react-redux';
const Sidebar = ()=>{

    const {isOpenSidebar:openSidebar}=useSelector(store=>store.layotSlice)
      
    return(
        <div id='sidebar' className={`sidebar_container ${openSidebar ? '' : 'sidebar-hidden'}`}>
        <SidebarLinks />
        <SidebarProjects />
        </div>
    )
    
}

export default Sidebar