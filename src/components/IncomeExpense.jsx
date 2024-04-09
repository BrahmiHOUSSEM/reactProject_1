import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((e) => e.amount);
  const income = amounts.filter((e) => e > 0).reduce((acc, e) => (acc += e), 0);
  const expense = amounts
    .filter((e) => e < 0)
    .reduce((acc, e) => (acc += e), 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
};
export default IncomeExpense;
