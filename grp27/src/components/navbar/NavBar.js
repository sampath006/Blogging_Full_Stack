import "./navbar.css"
import React, { useContext } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/Picture1.jpg";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function NavBar() {
    const {user, dispatch} = useContext(Context)
    const PF = "http://localhost:5000/images/"

    const handleLogout = ()=>{
        dispatch({type:"LOGOUT"});
    };

    return (
        <div className="nav">
            <div id="logo">
                <img src={logo} />
            </div>

            <div className="centerNav">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    {user ? (
                        <li className="topListItem">
                        <Link className="link" to={`/?user=${user.username}`}>BLOGS</Link>
                        </li>
                    ) : (
                        <li className="topListItem">
                        <Link className="link" to="/login">BLOGS</Link>
                        </li>
                    )}
                    <li className="topListItem">
                    <Link className="link" to="/add">ADD</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/about">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/event">EVENT</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                    {user && "LOGOUT"}
                    </li>

                </ul>
            </div>
            <div className="rightNav">
                { user ? (
                    <Link to="/settings" className="link"><img className="rightImg" src={PF + user.profilePic} alt=""/></Link>
                    ) :(
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <AiOutlineSearch className="searchImg"/>
            </div>
        </div>
    )
}
