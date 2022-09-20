import React from "react";
interface GreeterProps {
  person: string;
}
function Greeter({ person }: GreeterProps): JSX.Element {
  return <h1>Hello, {person}</h1>;
}

export default Greeter;

// const Greeter2: React.FC = () => {
//   return <h1>Hello</h1>;
// };
