const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
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
