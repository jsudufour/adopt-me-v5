const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
