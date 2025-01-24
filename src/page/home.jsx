import Carousel from "../Components/Carousel/carousel.jsx";
import Navbar from "../Components/Navbar/navbar";
import Skills from "../Components/Skills/skills";
import useProjects from "../Components/FetchData/fetchData.js";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import './home.styles.css';
import imgProfile from "../Images/C-2.png";
import { useTheme } from "../Components/ThemeContext/themeContext.jsx";


function Home(){

    const projects = useProjects();
    const {isDarkMode} = useTheme();
    // , toggleTheme
    return(
        <>
        <div
        style={{
        backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
        color: isDarkMode ? '#FFFFFF' : '#000000',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease, color 0.3s ease' }}>
            <Navbar />
            <div id="profileSection" className="curved-container">
                <svg className="curved-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#d4d8fc" fillOpacity="1" d="M0,160L40,165.3C80,171,160,181,240,192C320,203,400,213,480,208C560,203,640,181,720,170.7C800,160,880,160,960,165.3C1040,171,1120,181,1200,186.7C1280,192,1360,192,1400,192L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                </svg>
            </div>
            <h2 className="profile-title">Développeuse Web</h2>
            <div className="introduction">
                <img src={imgProfile} alt="Profile" className="profilePicture"></img>
                <div className="introduction-txt">
                    <p>👩🏻‍💻 Mon moteur? Combiner créativité et expertise technique pour concevoir des solutions web modernes et performantes</p>
                    <p>✨ Avec une formation chez Openclassrooms axée sur des technologies comme le HTML, CSS/SASS, JavaScript, React et une sensibilité au SEO</p>
                    <p>✨ Mon parcours m'a permis de travailler sur des projets variés, mêlant développement front-end avec React et des outils de Business Intelligence comme Qlik Sense</p>
                    <p>💫 J'aime apprendre pour affiner mes compétences sur des projets où je peux mettre à profit mon esprit créatif et mon goût pour la résolution de problèmes</p>
                    <a href="mailto:carlalolajeanne@gmail.com" className="contact-email">📝 Contactez-moi par mail</a>
                    <a href="https://www.linkedin.com/in/carla-lopez-393784257" target="_blank" rel="noopener noreferrer" className="contact-linkedin"><FaLinkedin /> Profil LinkedIn</a>
                </div>
            </div>
            <Skills />
            <h2 id="projectSection">Projetcs</h2>
            <div className="carousel-area">
                {projects.map((project) => (
                    <div className="project-area" key={project.id}>
                        <div className="title-project">
                        <HiOutlineDesktopComputer /><h3>{project.title}</h3>
                        <p>{project.description}</p>
                        </div>
                        <div className="pictures-area">
                            <Carousel data={project.pictures} />
                        </div>
                        <div className="link-projet">
                            <LiaExternalLinkAltSolid /><a href={project.lien} target="_blank" rel="noopener noreferrer">
                                Voir le repository GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}

export default Home;