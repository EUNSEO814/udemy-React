import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsOpen(!isOpen);
  };
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="new-expense">
      {isOpen ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          toggleHandler={toggleHandler}
        />
      ) : (
        <button onClick={toggleHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
