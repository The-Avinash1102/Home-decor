import React from "react";
import { Link } from "react-router-dom";
import '../Pages/style.css';
        

const Top = () => {
    return (
        <>
            <div className="top-elements">
                <div className="logo">Home Decors</div>
                <nav className="navbar" id="navigation">
                    <ul className="nav-elements">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/trend-page">New & Trending</Link></li>
                        <li><Link to="/decor-page">Decor</Link></li>
                        <li><Link to="/kitchen-page">Kitchen & Dining</Link></li>
                        <li><Link to="/lighting-page">Lighting</Link></li>
                        <li><Link to="/wall-decor">Wall Decor</Link></li>
                        <li><Link to="/furniture-page">Furniture</Link></li>
                    </ul>
                </nav>
            </div>



            <div className="quick-access">
                <div className="quick-item"><figure><img src="" alt="New & Trending" /></figure><figcaption>New & Trending</figcaption></div>
                <div className="quick-item"><figure><img src="" alt="Best Sellers" /></figure><figcaption>Best Sellers</figcaption></div>
                <div className="quick-item"><figure><img src="" alt="Kitchen Accessories" /></figure><figcaption>Kitchen Accessories</figcaption></div>
                <div className="quick-item"><figure><img src="" alt="Decor" /></figure><figcaption>Decor</figcaption></div>
                <div className="quick-item"><figure><img src="" alt="Kitchen" /></figure><figcaption>Kitchen</figcaption></div>
                <div className="quick-item"><figure><img src="" alt="Lighting" /></figure><figcaption>Lighting</figcaption></div>
                <div className="quick-item"><figure><img src="" alt="Wall Decor" /></figure><figcaption>Wall Decor</figcaption></div>
                <div className="quick-item"><figure><img src="" alt="Furniture" /></figure><figcaption>Furniture</figcaption></div>
            </div>
        </>
    );
};

export default Top;
