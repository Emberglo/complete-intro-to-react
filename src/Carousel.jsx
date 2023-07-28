import { Component } from "react";

// class component must extend Component
class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  // good example of how arrow functions don't have a this and use lexical scope to determine what this refers to
  handleIndexClick = (e) => {
    this.setState({
      // dataset refers to all data- on an object - for this it's data-index which - dom method
      //index is a string - everything that comes out of the dom is a string
      // the + is called a urnary plus and coerces a string into a number
      active: +e.target.dataset.index,
    });
  };

  // every class component must have a render function, even if it doesn't return markup
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="Animal Hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              key={photo}
              className={index === active ? "active" : ""}
              alt="Animal Thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
