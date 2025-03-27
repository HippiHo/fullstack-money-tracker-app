import "./App.css";
import Transaction from "./components/Transaction";

function App() {
  return (
    <main>
      <h1>
        400<span>,00</span>€
      </h1>
      <form>
        <div className="basics">
          <input type="text" placeholder={"+200 neuer Samsung Fernseher"} />
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder="Beschreibung" />
        </div>
        <button type="submit">Neue Transaktion</button>
      </form>
      <div className="transactions">
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
    </main>
  );
}

export default App;
