import { Routes,Route } from "react-router-dom"
import Inbox from "../page/Inbox"
import Today from "../page/Today"
import Upcoming from "../page/Upcoming"
import FilterLabels from "../page/FilterLabels"

export const ROUT_LIST=[
    {
        title:"Welcome To Inbox",
        path:"/inbox",
        elment:Inbox
    },
    {
        title:"Welcome To Today",
        path:"/today",
        elment:Today
    },
    {
        title:"Welcome To Upcoming",
        path:"/upcoming",
        elment:Upcoming
    },
    {
        title:"Welcome To Filter And Labels",
        path:"/filterLabels",
        elment:FilterLabels
    },
]


const MainRouter=()=>{
    return(
        <Routes>
            {ROUT_LIST.map(item=><Route path={item.path} exact={true} elment={item.elment} />)}
        </Routes>
            
       
    )
}

export default MainRouter