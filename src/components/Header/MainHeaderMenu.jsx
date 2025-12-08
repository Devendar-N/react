import "./Header.css";
import {
    SearchIcon,
    WishListIcon,
    UserIcon,
    CartIcon
} from "@images/images";
import { useState } from "react";
import {Link} from "react-router-dom";

const MainHeaderMenu = () => {
    const [open, setOpen] = useState(false);

    function toggleMenu() {
        setOpen(!open);
    }

    return (
        <div>
            {/* HAMBURGER */}
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div id="main-header-menu">
                <div className="main-header-menu-section-left">
                    <div className="main-header-menu-logo">Exclusive</div>

                    <div className={`main-header-menu-links ${open ? "show" : ""}`} id="main-header-menu-links">
                        <Link to="/" className="menu-link-content">Home</Link>
                        <button className="menu-link-content">Contact</button>
                        <Link to="/AboutUs" className="menu-link-content">About</Link>
                        <button className="menu-link-content">Sign Up</button>
                    </div>
                </div>

                <div className="main-header-menu-section-right">
                    <div className="search-container">
                        <div className="search-box">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="What are you looking for?"
                            />
                            <img src={SearchIcon} className="search" />
                        </div>
                    </div>

                    <div className="main-header-side-icons">
                        <img src={WishListIcon} className="main-header-wishlist" title="Wishlist" />
                        <img src={CartIcon} className="main-header-cart-container" title="Cart" />
                        <img src={UserIcon} className="main-header-user-icon" title="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeaderMenu;
