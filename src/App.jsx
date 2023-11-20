import { Colors } from "./Colors";

const colorsData = [
  { id: 1, name: "Red" },
  { id: 2, name: "Yellow" },
  { id: 3, name: "Green" },
];

export function App() {
  return (
    <div>
      <h1>Colors List</h1>
      <Colors colors={colorsData} />
    </div>
  );
}