import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const List = () => {
  const context = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {context.transactions.map((e) => (
          <Transaction key={e.id} Transaction={e} />
        ))}
      </ul>
    </>
  );
};
export default List;
