import { useState } from "react";

export default function Product() {
  const [Products, ChangeProduct] = useState([
    { ID: 0, Name: "Laptop", price: 500 },
    { ID: 1, Name: "Phone", price: 232 },
    { ID: 2, Name: "Phone", price: 903 },
    { ID: 3, Name: "Keyboard", price: 430 },
    { ID: 4, Name: "Screen", price: 1020 },
  ]);

  const fruits = ["Apple", "Pear", "Peach"];

  const ProductList = Products.map((product) => (
    <li key={product.ID}>
      {product.Name}: R{product.price}
    </li>
  ));
  //Non ID array
  const FruitList = fruits.map((fruit, index) => (
    <li key={index}>Delicious {fruit} </li>
  ));

  return (
    <div>
      <div>
        <ol>{ProductList}</ol>
      </div>
      <div>
        <ol>{FruitList}</ol>
      </div>
    </div>
  );
}
