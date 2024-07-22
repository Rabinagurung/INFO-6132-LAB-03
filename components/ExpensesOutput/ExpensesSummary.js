import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function ExpensesSummary({ expenses, periodName }) {
  const sumOfExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.period}>{periodName}</Text>
        <View style={styles.total}>
          <Text style={{ ...styles.period, color: 'black' }}>
            {expenses.length}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.period}>Balance</Text>
        <Text style={styles.sum}>{sumOfExpenses}</Text>
      </View>
    </>
  );
}
export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  total: {
    backgroundColor: 'white',
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary400,
  },
});
