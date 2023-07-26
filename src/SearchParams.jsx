import { useState } from "react";

const SearchParams = () => {
  // useState is a hook that tracks state in this component
  const [location, setLocation] = useState("");
  // above destructuring actually looks like:
  // const locationHook = useState("");
  // const location = locationHook[0];
  // const setLocation = locationHook[1];

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          {/* curly braces in value make tells it to insert the javascript expression stored in location rather than just a string "location"
          onchange holds a function to run when the input detects a change and updates the state above */}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
