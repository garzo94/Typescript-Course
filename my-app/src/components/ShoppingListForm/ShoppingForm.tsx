import React, { useRef } from "react";

interface ShoppingPROS {
  addItem: (item: string) => void;
}

export default function ShoppingForm({ addItem }: ShoppingPROS): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    addItem(inputRef.current?.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="hola" ref={inputRef} />
      <button type="submit">Add item</button>
    </form>
  );
}
