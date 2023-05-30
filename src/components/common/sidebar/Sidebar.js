import SidebarLinks from "./SidebarLinks"
import SidebarProjects from "./SidebarProjects"
import "./sidebar.css"
import { useSelector } from 'react-redux';
const Sidebar = ()=>{

    const {openSidebar,closeSidebar}=useSelector(store=>{
        return {
          openSidebar:store.layotSlice.isOpenSidebar,
          closeSidebar:store.layotSlice.isCloseSidebar
        }
      })
      
    return(
        <div id='sidebar' className={`sidebar_container ${openSidebar ? '' : 'sidebar-hidden'}`}>
        <SidebarLinks />
        <SidebarProjects />
        </div>
    )
    
}

export default Sidebar