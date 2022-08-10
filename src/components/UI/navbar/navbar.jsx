import React, { useContext } from "react";
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return(
        <div className='navbar'>
            <MyButton onClick={logout}>Выйти</MyButton>
            <div className='navbar__links'>
                <Link to='/about' style={{marginRight: 15}} className='link'>Секрет</Link>
                <Link to='/posts' className='link'>Посты</Link>
            </div>
        </div>
    )
}

export default Navbar;