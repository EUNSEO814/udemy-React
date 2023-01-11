import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {/* option 3 */}
      {props.items.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
      {/* option 1 */}
      {/* {filteredItems.length === 0 ? (
          <p className="noData">No expenses found.</p>
        ) : (
          filteredItems.map((el) => {
            return (
              <ExpenseItem
                key={el.id}
                title={el.title}
                amount={el.amount}
                date={el.date}
              />
            );
          })
        )} */}
      {/* option 2 */}
      {/* {filteredItems.length === 0 && (
          <p className="noData">No expenses found.</p>
        )}
        {filteredItems.length > 0 &&
          filteredItems.map((el) => (
            <ExpenseItem
              key={el.id}
              title={el.title}
              amount={el.amount}
              date={el.date}
            />
          ))} */}
    </ul>
  );
};

export default ExpensesList;
