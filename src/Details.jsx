import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  // id is coming from a store created by the browserrouter in app.js
  const { id } = useParams();

  // the array in the following line is the query key that is passed to fetchPets
  // why we hard coded id at postion 1 in fetchPets & details is the key it will use to store the info in its cache
  // we pass fetchPet to be run incase the query does not find anything at the provided index in cache
  // treats this like a syncronous hook, but is really fetching from an ansync api
  const results = useQuery(["details", id], fetchPet);

  // catching an error with the useQuery
  if (results.isError) {
    return <h2>Error Finding Pet</h2>;
  }

  // if it didn't find anything and is loading the request this shows a loading spinner
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">
          {/* can put an emoji here that will just spin */}
          𖦹
        </h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          {/* Modal can really go anywhere in this component */}
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="buttons">
                  <button>Yes</button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </h2>
      </div>
    </div>
  );
};

// this function is basically a component that wraps our original Details component
// if Details was taking in props - we'd have to add props as an argument to the DetailsErrorBoundary function and use {...props} inside the Details tag inside the function
function DetailsErrorBoundary() {
  return (
    <ErrorBoundary
      errorComponent={
        <h2>
          There was an error with this listing.{" "}
          <Link to="/">Click here to go back to the home page.</Link>
        </h2>
      }
    >
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
