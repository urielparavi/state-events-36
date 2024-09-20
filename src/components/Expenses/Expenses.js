import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  // let filterInfoText = '2019, 2021 & 2022'; // Example of computed/derived state

  // Example of computed/derived state
  // if (filteredYear === '2019') {
  //   filterInfoText = '2020, 2021, & 2022';
  // } else if (filteredYear === '2021') {
  //   filterInfoText = '2019, 2020, & 2022';
  // } else {
  //   filterInfoText = '2019, 2020, & 2021';
  // }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* Example of computed/derived state */}
        {/* <p style={{ color: 'white' }}>
          Data for years {filterInfoText} is hidden. 
        </p> */}
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
