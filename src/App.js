import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Adidas Adimatic",
          img: "adidas Originals Adimatic.jpg",
          desc: "spring/summer",
          category: "shoes",
          price: "9999",
        },
        {
          id: 2,
          title: "New Balance 703",
          img: "New Balance 703.jpg",
          desc: "spring/summer",
          category: "shoes",
          price: "19999",
        },
        {
          id: 3,
          title: "Atmos x Adidas Adimatic",
          img: "atmos x adidas.jpg",
          desc: "spring/summer",
          category: "shoes",
          price: "16399",
        },
        {
          id: 4,
          title: "Adidas Retropy E5",
          img: "adidas Originals Retropy E5.jpg",
          desc: "spring/summer",
          category: "shoes",
          price: "11299",
        },
        {
          if: 5,
          title: "Asics gel-kahana 8",
          img: "asics gel-kahana 8.jpg",
          desc: "spring/summer",
          category: "shoes",
          price: "10799",
        },
      ],
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}
export default App;
