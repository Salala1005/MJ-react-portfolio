
function Project(props) {
  const { title, description, image, link1, link2 } = props;
  const handleLink1 = (e) => {
    e.preventDefault()
    window.open(link1);
  };
  const handleLink2 = (e) => {
    e.preventDefault()
    window.open(link2);
  };

  return (
        <div className="col-md-3">
            <div className="card custom-card" >
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {/* <p className="card-text">
                  {description}
                </p> */}
              </div>
              <div className="card-body">
                <a href={link1} className="card-link" onClick={handleLink1}>
                  Webpage
                </a>
                <a href={link2} className="card-link"onClick={handleLink2} >
                  GitHub
                </a>
              </div>
            </div>
        </div>
  );
}

export default Project;
