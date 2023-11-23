import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
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
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
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
