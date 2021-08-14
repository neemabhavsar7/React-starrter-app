import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setMonsters(data);
      });
  });
  console.log("monsters: ", monsters);
  return (
    <div className="App">
      {monsters.map((monster) => (
        <h3 key={monster.id}>{monster.name}</h3>
      ))}
    </div>
  );
}
