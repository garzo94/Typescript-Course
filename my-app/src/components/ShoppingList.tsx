import React from "react";
interface Item {
  id: number;
  product: string;
  quantity: number;
}
interface ShoppingProps {
  items: Item[];
}
export default function ShoppingList({ items }: ShoppingProps): JSX.Element {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.product}</li>;
        })}
      </ul>
    </div>
  );
}
