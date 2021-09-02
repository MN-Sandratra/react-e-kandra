import React from "react";
import '../styles/navbar.scss'
import { AiFillHome, AiFillNotification, AiFillProfile, AiFillWechat, AiOutlineSearch, IoBag } from 'react-icons/all';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        // <div classNameName="header">
        //     <div className="header__left">
        //         <img src="" alt="icon" />
        //         <div className="header__search">
        //             <i className="material-icons"> <AiOutlineSearch></AiOutlineSearch> </i>
        //             <input type="text" />
        //         </div>
        //     </div>

        //     <div className="header__right">
        //         <div className="headerOption">
        //             <i className="headerOption__icon"><AiFillHome/></i>
        //             <h3>Home</h3>
        //         </div>
        //         <div className="headerOption">
        //             <i className="headerOption__icon"><IoBag/></i>
        //             <h3>Jobs</h3>
        //         </div>
        //         <div className="headerOption">
        //             <i className="headerOption__icon"><AiFillWechat/></i>
        //             <h3>Messaging</h3>
        //         </div>
        //         <div className="headerOption">
        //             <i className="headerOption__icon"><AiFillNotification></AiFillNotification></i>
        //             <h3>Notifications</h3>
        //         </div>
        //         <div className="headerOption">
        //             <i className="headerOption__icon"><AiFillProfile/></i>
        //             <h3>Me</h3>
        //         </div>
        //     </div>
        // </div>
        <nav className="navbar navbar-expand-lg navbar-light  fixed-top header">
            <div className="container container-fluid">
                <div className="header__left">
                    <Link className="navbar-brand" to=''>E-Kandra</Link>
                    <div className="header__search">
                        <i className="material-icons"> <AiOutlineSearch></AiOutlineSearch> </i>
                        <input type="text" />
                    </div>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse header__right" id="navbarText">
                    <ul className="navbar-nav mb-1 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to=''>
                                <div className="headerOption">
                                    <i className="headerOption__icon"><AiFillHome/></i>
                                    <h3>Accueil</h3>
                                </div></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/message'><div className="headerOption">
                                <i className="headerOption__icon"><AiFillWechat/></i>
                                <h3>Message</h3>
                            </div></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/job'>
                                <div className="headerOption">
                                    <i className="headerOption__icon"><AiFillProfile /></i>
                                    <h3>Travail</h3>
                                </div></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;