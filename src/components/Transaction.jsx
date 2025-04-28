import "./Transaction.css";
import { FaRegTrashAlt } from "react-icons/fa";

const Transaction = ({ transaction, deleteTransaction }) => {
  return (
    <div className="transaction" id={transaction._id}>
      <div className="left">
        <div className="name">{transaction.name}</div>
        <div className="description">{transaction.description}</div>
      </div>
      <div className="right">
        <div
          className={transaction.price > 0 ? "price --green" : "price --red"}
        >
          {transaction.price} €
        </div>
        <div className="datetime">{transaction.dateTime}</div>
        <button
          className="delete-button"
          type="button"
          onClick={() => deleteTransaction(transaction._id)}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Transaction;
