
function Project(props) {
  const { title, description, image, link1, link2 } = props;
  return (
    <div className="col-4">
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {/* <p className="card-text">
              {description}
            </p> */}
          </div>
          <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
    </div>
  );
}

export default Project;
