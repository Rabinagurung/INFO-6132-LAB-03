import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpenseContext } from '../src/expenses-context';

function RecentExpense() {
  const expensesCtx = useContext(ExpenseContext);

  return <ExpensesOutput expenses={expensesCtx.expenses} periodName="All" />;
}

export default RecentExpense;
