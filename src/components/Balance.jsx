import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((e) => e.amount);
  const balance = amounts.reduce((acc, e) => (acc += e), 0);

  return (
    <>
      <h4 className="font-bold">Your Balance</h4>
      <h1>
        {balance.toFixed(2) >= 0
          ? `$${balance.toFixed(2)}`
          : `-$${Math.abs(balance.toFixed(2))}`}
      </h1>
    </>
  );
};
export default Balance;
