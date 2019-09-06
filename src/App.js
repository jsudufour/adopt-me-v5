import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "kiwi",
      animal: "dog",
      breed: "chihuahua"
    }),
    React.createElement(Pet, {
      name: "chico",
      animal: "dog",
      breed: "daschund"
    }),
    React.createElement(Pet, {
      name: "gryffin",
      animal: "cat",
      breed: "domestic shorthair"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
