import Carousel from "../Components/Carousel/carousel.jsx";
import Navbar from "../Components/Navbar/navbar";
import Skills from "../Components/Skills/skills";
import useProjects from "../Components/FetchData/fetchData.js";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import './home.styles.css';


function Home(){

    const projects = useProjects();

    return(
        <>
        <Navbar />
        <div id="home" className="curved-container">
            <svg className="curved-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#d4d8fc" fillOpacity="1" d="M0,160L40,165.3C80,171,160,181,240,192C320,203,400,213,480,208C560,203,640,181,720,170.7C800,160,880,160,960,165.3C1040,171,1120,181,1200,186.7C1280,192,1360,192,1400,192L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        <Skills />
           <div id="projectSection" className="carousel-area">
            {projects.map((project) => (
                <div key={project.id}>
                    <div className="title-project">
                        <h2>{project.title}</h2>
                        <div className="link-projet">
                            <LiaExternalLinkAltSolid /><a href={project.lien} target="_blank" rel="noopener noreferrer">
                                Voir le repository GitHub
                            </a>
                        </div>
                    </div>
                    <div className="pictures-area">
                        <Carousel data={project.pictures} />
                    </div>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
        <div className="curved-container-footer">
            <svg className="curved-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#d4d8fc" fillOpacity="1" d="M0,160L40,165.3C80,171,160,181,240,192C320,203,400,213,480,208C560,203,640,181,720,170.7C800,160,880,160,960,165.3C1040,171,1120,181,1200,186.7C1280,192,1360,192,1400,192L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>
    </>
    )
}

export default Home;