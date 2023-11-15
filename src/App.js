import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";

function App() {
  let [income, setIncome] = useState(0);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  let [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const maxRowsToShow = 5;

  console.log(name, amount);

  useEffect(() => {});

  async function handleSubmit(e) {
    e.preventDefault();
    setData([...data, { name, amount }]);
    setTotalAmount((prevTotal) => prevTotal + parseFloat(amount));
  }

  return (
    <div className="App h-screen bg-slate-900">
      <h1 className="text-4xl text-white font-bold p-10">
        Quick Expense Tracker
      </h1>
      <div className="flex flex-wrap p-10 justify-evenly mx-auto">
        <div className="bg-white text-green-500 h-16 w-80 rounded-lg justify-center  text-xl">
          <p>Income</p>
          <p> ${income}</p>
        </div>
        <div className="bg-white text-red-500 h-16 w-80 rounded-lg justify-center text-xl">
          <p>Expense</p>
          <p> ${totalAmount}</p>
        </div>
        <div className="bg-white text-red-500 h-16 w-80 rounded-lg justify-center text-xl">
          <p>Balance</p>
          <p> ${income - totalAmount}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly mx-auto">
        <div className="h-72 w-80">
          <h1 className="text-2xl text-white font-bold p-5">
            Enter your Income
          </h1>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="number"
              id="name"
              onChange={(e) => {
                setIncome(e.target.value);
              }}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <h1 className="text-2xl text-white font-bold p-5">
            Add new transaction
          </h1>
          <div className="mt-6">
            <form onSubmit={handleSubmit}>
              <div class="relative z-0 w-full mb-6 group">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Transaction Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <label
                  for="amount"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <button
                  type="submit"
                  class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  <FaPlus size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="h-full w-80 bg-slate-900">
          <h1 className="text-2xl text-white font-bold p-5">History</h1>
          <div className="mt-6 text-blue-500 text-md ">
            {data
              .slice(0, showAll ? data.length : maxRowsToShow)
              .map((obj, index) => (
                <div
                  key={index}
                  className=" rounded bg-white w-full h-10 py-2 my-2"
                >
                  {obj.name} ${obj.amount}
                </div>
              ))}
            {data.length > maxRowsToShow && !showAll && (
              <button
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => setShowAll(true)}
              >
                Expand more
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
