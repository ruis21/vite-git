// import { Navigate, useNavigate } from "react-router-dom"
import { Link, useNavigate, NavLink } from "react-router-dom"


function Header() {

    // 메뉴에 링크 추가하는 방법
    // 1. useNavigate 
    // 2. <Link> 컴포넌트 사용
    // 3. NavLink component 

    // const navigate = useNavigate();

    return (
        <>
            <header>
                {/* 1. useNavigate 훅 사용 */}
                {/* <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/about')}>About</li>
                    <li onClick={() => navigate('/contact')}>Contact</li>
                </ul> */}

                {/* 2. <Link> 컴포넌트 사용
                a 링크를 넣으면 작동은 하지맘 새로고침이 됨 a href 대신에 Link To 를 넣어줌
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul> */}

                {/* 3. NavLink 컴포넌트 사용 */}
                <ul>
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
                </ul>
            </header >
        </>
    )
}

export default Header