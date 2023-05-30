import { useDispatch, useSelector } from "react-redux";
import "./header.css"
import SearchIcon from "./SearchIcon"
import "./svgIcon_Style.css"
import { MdOutlineAccountCircle } from "react-icons/md";
import { setIsOpenSidebar,setIsCloseSidebar } from "../../../store/slice/layot.slice";




const Header = ()=>{
    const {openSidebar,closeSidebar}=useSelector(store=>{
        return {
          openSidebar:store.layotSlice.isOpenSidebar,
          closeSidebar:store.layotSlice.isCloseSidebar
        }
      })
      
    const dispatch=useDispatch()
    const handleToggleHamburger=()=>{
            dispatch(setIsOpenSidebar(!openSidebar))
            dispatch(setIsCloseSidebar(!closeSidebar))
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