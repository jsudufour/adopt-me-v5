import React, { useState, useEffect, useContext } from "react";
// useEffect takes the place of lifecycle hooks:
// componentWillMount, componentDidMount, componentDidUpdate
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";
import ThemeContext from "./ThemeContext";
// animals array is an array of strings

const SearchParams = () => {
  // all hooks begin with 'use'
  // hooks give you stateful logic in react
  // hooks never go inside if statements or loops
  // hooks keep track of the order in which they are created

  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS); //label, default state, list of options to choose from
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);
  // dependencies; if any of these change, re-run this effect after a render
  // to run an effect once, set array to empty (no dependencies)
  // to run every time something updates, remove the array completely, but can fall into an infinite loop trap
  // useEffect enforces this dependency array so as to not get into an infinite re-rendering loop
  // scheduling this function to run after the component renders
  // once search params renders for the first time, then it runs the effect
  // why?
  // don't want to slow down the first render

  return (
    <div className="search-params">
      <form
        onSubmit={event => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            id="loation"
            value={location}
            placeholder="Location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
