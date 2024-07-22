import { createContext } from 'react';
import { useReducer } from 'react';

export const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Laptop',
    address: 'San Francisco, CA',
    amount: 1200.0,
    date: new Date('2024-07-10'),
  },
  {
    id: 'e2',
    description: 'Groceries',
    address: 'Austin, TX',
    amount: 85.75,
    date: new Date('2024-07-12'),
  },
  {
    id: 'e3',
    description: 'Coffee Maker',
    address: 'Seattle, WA',
    amount: 55.99,
    date: new Date('2024-06-28'),
  },
  {
    id: 'e4',
    description: 'Gym Membership',
    address: 'Denver, CO',
    amount: 45.0,
    date: new Date('2024-06-20'),
  },
  {
    id: 'e5',
    description: 'Desk Chair',
    address: 'Chicago, IL',
    amount: 150.0,
    date: new Date('2024-07-05'),
  },
  {
    id: 'e6',
    description: 'Bookshelf',
    address: 'New York, NY',
    amount: 90.0,
    date: new Date('2024-07-07'),
  },
  {
    id: 'e7',
    description: 'Plane Ticket',
    address: 'Los Angeles, CA',
    amount: 350.0,
    date: new Date('2024-06-15'),
  },
  {
    id: 'e8',
    description: 'Hotel Stay',
    address: 'Miami, FL',
    amount: 600.0,
    date: new Date('2024-06-22'),
  },
  {
    id: 'e9',
    description: 'Concert Ticket',
    address: 'Nashville, TN',
    amount: 120.0,
    date: new Date('2024-07-03'),
  },
  {
    id: 'e10',
    description: 'Bicycle',
    address: 'Portland, OR',
    amount: 300.0,
    date: new Date('2024-06-18'),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, address, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, address, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);

    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[updatableExpenseIndex];

      const updatedItem = { ...updatableExpense, ...action.payload.data };

      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatableExpense;

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpensesContextProvider;
