import "./Transaction.css";

const Transaction = ({ transaction }) => {
  return (
    <div class="transaction">
      <div className="left">
        <div className="name">{transaction.name}</div>
        <div className="description">{transaction.description}</div>
      </div>
      <div className="right">
        <div
          className={transaction.price >= 0 ? "price --green" : "price --red"}
        >
          {transaction.price} €
        </div>
        <div className="datetime">{transaction.time}</div>
      </div>
    </div>
  );
};

export default Transaction;
