import "./sidebar.css"
import EntryIcon from "./EntryIcon"
import TodayIcon from "./TodayIcon"
import SoonIcon from "./SoonIcon"
import FilterLabelsIcon from "./FilterLabelsIcon"

const SidebarLinks=()=>{
    return(
    <>
        <section className="sidebarLinks_Container mt-5 ml-3 mr-3">
            
                <div className="sidebarLinks_items">
                    <EntryIcon  />
                    <div className="ml-2">Entry</div>
                </div>
                <div>-</div>
        </section>
        <section className="sidebarLinks_Container ml-3 mr-3">
            
                <div className="sidebarLinks_items">
                    <TodayIcon  />
                    <div className="ml-2">Today</div>
                </div>
                <div>-</div>
        </section>
        <section className="sidebarLinks_Container ml-3 mr-3">
            
            <div className="sidebarLinks_items">
                <SoonIcon  />
                <div className="ml-2">Soon</div>
            </div>
            <div>-</div>
        </section>
        <section className="sidebarLinks_Container ml-3 mr-3">
            
            <div className="sidebarLinks_items">
                <FilterLabelsIcon  />
                <div className="ml-2">Filter and Labels</div>
            </div>
            <div>-</div>
        </section>
    </>
    )
}
export default SidebarLinks