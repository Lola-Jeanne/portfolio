import { FaHouseUser } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { FaGears } from "react-icons/fa6";
import './navbar.styles.css'

export default function Navbar(){
    return(
        <>
            <header>
                <div className="link-name">
                    <p>By Carla</p>
                </div>
                <div className='link'>
                    <FaHouseUser /><a href='#profile'>Profile</a>
                </div>
                <div className='link'>
                    <FaGears /><a href='#skillsSection'>Skills</a>
                </div>
                <div className='link'>
                    <IoRocketSharp /><a href='#projectSection'>Projects</a>
                </div>
            </header>
        </>
    )
}