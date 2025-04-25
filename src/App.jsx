import "./App.css";
import Transaction from "./components/Transaction";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState([]);

  async function getTransactions() {
    const url = import.meta.env.VITE_REACT_APP_API_URL + "/transactions";
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  useEffect(() => {
    getTransactions().then((transactions) => setTransactions(transactions));
  }, []);

  const addNewTransaction = (ev) => {
    ev.preventDefault();
    const url = import.meta.env.VITE_REACT_APP_API_URL + "/transaction";
    const price = name.split(" ")[0].replace(",", ".");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.substring(price.length + 1),
        price,
        description,
        dateTime,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setName("");
        setDescription(""), setDateTime("");
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  let balance = 0;
  for (const transaction of transactions) {
    balance = balance + transaction.price;
  }
  balance = balance.toFixed(2);
  const fraction = balance.split(".")[1];
  balance = balance.split(".")[0];

  return (
    <main>
      <h1>
        {balance}
        <span>{fraction}</span> €
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
        {transactions.length > 0 &&
          transactions.map((transaction, index) => (
            <Transaction transaction={transaction} key={index} />
          ))}
      </div>
    </main>
  );
}

export default App;
