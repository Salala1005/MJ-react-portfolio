import Project from '../components/Project';
import projects from '../data/projects.json';
import "../App.css";

function ProjectsGallery() {
    return (
    <div>
          <div>
              <p className="project-intro">PROJECTS GALLERY</p>
          </div>
          <div className='row' style ={{'--col-gap':'.25rem', gap:'.25rem'}}>
              { projects.map((project) => {
                  return <Project key={project.id} title={project.title} description={project.description} image={project.image} />;
              })}
          </div>
    </div>
    )
}

export default ProjectsGallery;