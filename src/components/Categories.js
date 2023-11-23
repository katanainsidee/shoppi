import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "shoes",
          name: "Обувь",
        },
        {
          key: "outerwear",
          name: "Верхняя одежда",
        },
        {
          key: "pants",
          name: "Штаны",
        },
        {
          key: "accessories",
          name: "Аксесуары",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
