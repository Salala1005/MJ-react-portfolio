import Project from '../components/Project';
import projects from '../data/projects.json';
import "../App.css";

function ProjectsGallery() {
    return (
    <div>
          <div>
              <p className="project-intro">PROJECTS GALLERY</p>
          </div>
          <div className='row' style ={{display:"flex", gap:"30px", justifyContent:"center"}}>
              { projects.map((project) => {
                  return <Project key={project.id} title={project.title} image={project.image} link1={project.link1} link2={project.link2} />;
              })}
          </div>
    </div>
    )
}

export default ProjectsGallery;