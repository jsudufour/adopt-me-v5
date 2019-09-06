import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="kiwi" animal="dog" breed="chihuahua" />
      <Pet name="chico" animal="dog" breed="daschund" />
      <Pet name="gryffin" animal="cat" breed="domestic shorthair" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
