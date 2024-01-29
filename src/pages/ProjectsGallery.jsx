import Project from '../components/Project';
import projects from '../data/projects.json';
import "./home.css";

function ProjectsGallery() {
    return (
    <div>
          <div>
              <p className="project-intro">PROJECTS Gallery</p>
          </div>
          <div className='row' style ={{'--col-gap':'.25rem', gap:'.25rem'}}>
              { projects.map((project) => {
                  return <Project key={project.id} title={project.title} description={project.description} />;
              })}
          </div>
    </div>
    )
}

export default ProjectsGallery;