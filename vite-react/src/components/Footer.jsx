// import { Navigate, useNavigate } from "react-router-dom"
import { Link, useNavigate, NavLink } from "react-router-dom"


function Footer() {
    return (
        <>
            <footer>
                {/* <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => {
                            return isActive ? 'on' : ''
                        }}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => {
                            return isActive ? 'on' : ''
                        }}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => {
                            return isActive ? 'on' : ''
                        }}>Contact</NavLink>
                    </li>
                </ul> */}
                <div>푸터영역</div>
            </footer>
        </>
    )
}

export default Footer