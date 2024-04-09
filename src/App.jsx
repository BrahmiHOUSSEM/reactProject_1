import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import List from "./components/List";
import { GlobalProvider } from "./context/GlobalState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <GlobalProvider>
      <ToastContainer />
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <List />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};
export default App;
