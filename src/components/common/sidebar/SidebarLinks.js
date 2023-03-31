import "./sidebar.css"
import {Link} from "react-router-dom";
import InboxIcon from "./InboxIcon"
import TodayIcon from "./TodayIcon"
import SoonIcon from "./SoonIcon"
import FilterLabelsIcon from "./FilterLabelsIcon"

const SidebarLinks=()=>{
    return(
    <>
        <section className="sidebarLinks_Container mt-5 ml-3 mr-3">
            
                <div className="sidebarLinks_items">
                    <InboxIcon  />
                    <Link to='./entry' className='active ml-2'>Entry </Link>
                </div>
                <div>-</div>
        </section>
        <section className="sidebarLinks_Container ml-3 mr-3">
            
                <div className="sidebarLinks_items">
                    <TodayIcon  />
                    <Link to='./today' className='ml-2'>Today </Link>
                </div>
                <div>-</div>
        </section>
        <section className="sidebarLinks_Container ml-3 mr-3">
            
            <div className="sidebarLinks_items">
                <SoonIcon  />
                <Link to='./soon' className='ml-2'>Soon </Link>
            </div>
            <div>-</div>
        </section>
        <section className="sidebarLinks_Container ml-3 mr-3">
            
            <div className="sidebarLinks_items">
                <FilterLabelsIcon  />
                <Link to='./filterLabels' className=' ml-2'>Filter and Labels </Link>
            </div>
            <div>-</div>
        </section>
    </>
    )
}
export default SidebarLinks