import React from 'react';
import ExpenseItem from './ExpenseItem';
function Expense(props) {
  const { expenses } = props;
  const allExpenseItems = expenses.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    );
  });

  return <div className='expense-items'>{allExpenseItems}</div>;
}

export default Expense;
