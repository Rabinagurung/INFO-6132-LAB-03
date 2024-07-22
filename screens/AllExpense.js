import { useContext } from 'react';
import { ExpenseContext } from '../src/expenses-context';
import { View, Text, StyleSheet } from 'react-native';
import ExpensesSummary from '../components/ExpensesOutput/ExpensesSummary';
import ExpenseItem from '../components/ExpensesOutput/ExpenseItem';
import { GlobalStyles } from '../constants/styles';

function AllExpense() {
  const { expenses } = useContext(ExpenseContext);

  const sortedExpense = [...expenses].sort((a, b) => a.amount - b.amount);
  //   console.log(highestExepnse[highestExepnse.length - 1]);
  const highestExpending = sortedExpense[sortedExpense.length - 1];
  const lowestExpending = sortedExpense[0];
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
      }}
    >
      <ExpensesSummary expenses={expenses} periodName="All transactions" />

      <View style={styles.container}>
        <Text style={styles.title}>High Spending</Text>
        <ExpenseItem {...highestExpending} />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Low Spending</Text>
        <ExpenseItem {...lowestExpending} />
      </View>
    </View>
  );

  //   return <ExpensesOutput expenses={expensesCtx.expenses} periodName="Total" />;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default AllExpense;
