import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  // takes a set of props, does some filtering, and passes them on to the component
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }
  // whenever doing event listeners, or passing functions down to children, use arrow functions!
  // garantees that 'this' is correct
  // arrow function don't create a new context
  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };
  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
