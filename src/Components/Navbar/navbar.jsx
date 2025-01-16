import { Link } from 'react-router-dom';
import './navbar.styles.css'

export default function Navbar(){
    return(
        <>
            <header>
                <p>Carla Lopez</p>
                    <a href='#home' className='link'>Home</a>
                    <a href='#skillsSection' className='link'>Skills</a>
                    <Link className='link'>Projects</Link>
            </header>
        </>
    )
}