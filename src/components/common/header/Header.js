import "./header.css"
import HamburgerButton from "./HamburgerButton"
// import HomeIcon from "./HomeIcon"
import SearchIcon from "./SearchIcon"
import "./svgIcon_Style.css"
import { MdOutlineAccountCircle } from "react-icons/md";



const Header = ()=>{
    return (
        <div id='header' className="header_container">
            <section className="header_Left">
                
                <HamburgerButton />
                {/* <HomeIcon /> */}
                
                    <img  className="overSvg svgIcon" src="/assets/icons/HomeIcon.svg" />
                    {/* <use className="overSvg svgIcon" xlinkHref="/assets/icons/HomeIcon.svg" /> */}
            
                
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