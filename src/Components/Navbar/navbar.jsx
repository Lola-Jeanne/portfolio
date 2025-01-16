import { IoHome } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";
import { FaGears } from "react-icons/fa6";
import './navbar.styles.css'

export default function Navbar(){
    return(
        <>
            <header>
                <p>Carla Lopez</p>
                <div className='link'>
                    <IoHome /><a href='#home'>Home</a>
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