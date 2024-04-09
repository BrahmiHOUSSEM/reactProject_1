import { toast } from "react-toastify";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Transaction = ({ Transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={Transaction.amount > 0 ? "plus" : "minus"}>
      {Transaction.text}{" "}
      <span>
        {Transaction.amount > 0 ? "+$" : "-$"}
        {Math.abs(Transaction.amount)}
      </span>
      <button
        onClick={() => {
          deleteTransaction(Transaction.id);
          toast.success("Transition deleted succefuly");
        }}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
export default Transaction;
