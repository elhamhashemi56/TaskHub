import "./sidebar.css"
import {Link} from "react-router-dom";


const SidebarLinks=()=>{
    return(
    <>
        <section className="sidebarLinks_Container mt-5 ml-3 mr-3">
            
                <div className="sidebarLinks_items">
                    <img src="/assets/icons/InboxIcon.svg" />
                    <Link to='./inbox' className='active ml-2'>Inbox </Link>
                </div>
                <div>-</div>
        </section>
        <section className="sidebarLinks_Container ml-3 mr-3">
            
                <div className="sidebarLinks_items">
                    <img src="/assets/icons/TodayIcon.svg" />
                    <Link to='./today' className='ml-2'>Today </Link>
                </div>
                <div>-</div>
        </section>
        <section className="sidebarLinks_Container ml-3 mr-3">
            
            <div className="sidebarLinks_items">
                <img src="/assets/icons/SoonIcon.svg" />
                <Link to='./upcoming' className='ml-2'>Upcoming </Link>
            </div>
            <div>-</div>
        </section>
        <section className="sidebarLinks_Container ml-3 mr-3">
            
            <div className="sidebarLinks_items">
                <img src="/assets/icons/FilterLabelsIcon.svg" />
                <Link to='./filterLabels' className=' ml-2'>Filter and Labels </Link>
            </div>
            <div>-</div>
        </section>
    </>
    )
}
export default SidebarLinks