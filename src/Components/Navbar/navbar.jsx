import { FaHouseUser } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { FaGears } from "react-icons/fa6";
import './navbar.styles.css'
import { useTheme } from "../ThemeContext/themeContext";
import { TbSunMoon } from "react-icons/tb";

export default function Navbar(){

    const { isDarkMode, toggleTheme } = useTheme();
    return(
        <>
            <header>
                <div className="link-name">
                    <p>By Carla</p>
                </div>
                <div className='link'>
                    <FaHouseUser /><a href='#profileSection'>Profile</a>
                </div>
                <div className='link'>
                    <FaGears /><a href='#skillsSection'>Skills</a>
                </div>
                <div className='link'>
                    <IoRocketSharp /><a href='#projectSection'>Projects</a>
                </div>
                <div className="theme-toggle">
                    <TbSunMoon />
                    <label className="toggle-switch">
                        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme}/>
                        <span className="slider"></span>
                    </label>
                </div>
            </header>
        </>
    )
}