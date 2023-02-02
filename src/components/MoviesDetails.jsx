import { useParams, useNavigate } from "react-router-dom";

const MoviesDetails = () => {
  let params = useParams();
  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/movies");
  };
  return (
    <div className="container-fluid center-content">
      <h1>Movie From {params.id}</h1>
      <button type="button" className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default MoviesDetails;
