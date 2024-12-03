import {NavLink} from 'react-router-dom'


export default function Navbar(){

    return(
        <div className="nav-container">
            <div className="header">
                <div className="logo-container">
                    <h3>Logo</h3>
                </div>

                <div className="nav-links-container">
                    <ul className="list">
                        <NavLink to={"/"}><li>Home</li></NavLink>
                        <NavLink to={"/about"}><li>About</li></NavLink>
                        <NavLink to={"/services"}><li>Services</li></NavLink>
                        <NavLink to={"/jobs"}><li>Jobs</li></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}