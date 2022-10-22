import React from 'react';

import './ExpenseDate.css';

function ExpenseDate(props) {
  const { date } = props;
  let month = date.toLocaleString('en-GB', { month: 'long' });
  let day = date.toLocaleString('en-GB', { day: 'numeric' });
  let year = date.toLocaleString('en-GB', { year: 'numeric' });

  return (
    <div className='expense-item-date'>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
