import React from 'react';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

function ExpenseItem(props) {
  let { date, title, amount } = props;

  return (
    <div className='expense-item-container'>
      <ExpenseDate date={date} />
      <div className='expense-item-description'>
        <div className='expense-item-title'>{title}</div>
        <div className='expense-item-amount'>${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
