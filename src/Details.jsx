import { useParams } from "react-router-dom";

const Details = () => {
  // id is coming from a store created by the browserrouter in app.js
  const { id } = useParams();

  return <h2>{id}</h2>;
};

export default Details;
