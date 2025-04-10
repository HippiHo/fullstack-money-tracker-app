import "./App.css";
import Transaction from "./components/Transaction";
import { useState } from "react";

const transactions = [
  {
    name: "Iphone",
    description: "War im Angebot",
    price: -400,
    time: "18.12.2024 15:30",
  },
  {
    name: "Job Neue Webseite",
    description: "Für Peter Parker",
    price: 800,
    time: "16.12.2024 15:30",
  },
  {
    name: "Ladekabel",
    description: "War nötig",
    price: -10,
    time: "12.12.2024 15:30",
  },
];

function App() {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");

  const addNewTransaction = (ev) => {
    ev.preventDefault();
    const url = import.meta.env.VITE_REACT_APP_API_URL + "/transaction";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        dateTime,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <main>
      <h1>
        400<span>,00</span> €
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basics">
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder={"+200 neuer Samsung Fernseher"}
          />
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(ev) => setDateTime(ev.target.value)}
          />
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            placeholder="Beschreibung"
          />
        </div>
        <button type="submit">Neue Transaktion hinzufügen</button>
      </form>
      <div className="transactions">
        {transactions.map((transaction, index) => (
          <Transaction transaction={transaction} key={index} />
        ))}
      </div>
    </main>
  );
}

export default App;
