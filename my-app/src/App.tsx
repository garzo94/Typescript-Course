import React, { useState } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import ShoppingForm from "./components/ShoppingListForm/ShoppingForm";

// const items = [
//   { id: 1, product: "Lemon", quantity: 3 },
//   { id: 2, product: "Orange", quantity: 5 },
// ];
interface Item {
  id: number;
  product: string;
  quantity: number;
}
function App() {
  const addItem = (product: string) => {
    setItems([...items, { id: 3, product, quantity: 1 }]);
  };
  const [items, setItems] = useState<Item[]>([]);
  return (
    <div className="App">
      <ShoppingList items={items} />
      <ShoppingForm addItem={addItem} />
    </div>
  );
}

export default App;
