import { useDispatch, useSelector } from "react-redux";
import "./header.css"
import SearchIcon from "./SearchIcon"
import "./svgIcon_Style.css"
import { MdOutlineAccountCircle } from "react-icons/md";
import { setToggleSidebar } from "../../../store/slice/layot.slice";




const Header = ()=>{
    const {toggleSide}=useSelector(store=>{
        return {
          toggleSide:store.layotSlice.toggleSidebar
        }
      })
      
    const dispatch=useDispatch()
    const handleToggleHamburger=()=>{
            dispatch(setToggleSidebar(!toggleSide))
    }
   
    return (
        <div id='header' className="header_container">
            <section className="header_Left">
                    <img onClick={handleToggleHamburger} className="overSvg svgIcon" src="/assets/icons/HamburgerIcon.svg" />
                    <img  className="overSvg svgIcon" src="/assets/icons/HomeIcon.svg" />
                    <SearchIcon />
            </section>
            <section className="header_Right">
                <div className="accountKlass">
                    <MdOutlineAccountCircle />
                </div>  
            </section>
        </div>
    ) 
}

export default Header