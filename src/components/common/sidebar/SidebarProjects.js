import { useSelector } from "react-redux"

const SidebarProjects=()=>{

    const {isOpenSidebar:openSidebar}=useSelector(store=>store.layotSlice)

    return(
        openSidebar &&
            <div>
                <p className="mt-5">sidebar Projects</p>
            </div>
        
    )
}
export default SidebarProjects