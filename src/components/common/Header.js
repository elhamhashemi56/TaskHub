import "./header.css"
import HamburgerButton from "./HamburgerButton"
import HomeIcon from "./HomeIcon"
import SearchIcon from "./SearchIcon"



const Header = ()=>{
    return (
        <div id='header' className="header_container">
            <section className="header_Left">
                <HamburgerButton />
                <HomeIcon />
                <SearchIcon />
            </section>
            <section className="header_Right">
                
            </section>
        </div>
    ) 
}

export default Header