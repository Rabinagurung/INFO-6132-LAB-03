import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { DUMMY_EXPENSES } from '../src/expenses-context';
import { getFormattedDate } from '../util/date';

function ManageExpense({ route, navigation }) {
  const editExpenseId = route.params?.expenseId;

  const expense = DUMMY_EXPENSES.find((exp) => exp.id === editExpenseId);
  const isEdting = !!editExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdting ? 'Expense details' : 'Add Expense',
    });
  }, [navigation, isEdting]);

  //   function deleteExpenseHandler() {
  //     navigation.goBack();
  //   }

  //   function cancelHandler() {
  //     navigation.goBack();
  //   }

  //   function confirmHandler() {
  //     navigation.goBack();
  //   }

  return (
    <View style={styles.container}>
      <View style={styles.detailConatiner}>
        <Text style={styles.amount}>$ {expense.amount}</Text>
        <Text style={styles.textBase}>{expense.description}</Text>
        <Text style={styles.textBase}>{expense.address}</Text>
      </View>

      <View style={styles.dateContainer}>
        <Text>Transaction Date</Text>
        <Text>{getFormattedDate(expense.date)}</Text>
      </View>

      {/*    <View style={styles.edit}>
                <View style={styles.buttonContainer}>
                    <Button mode='flat' style={styles.button} onPress={cancelHandler}>
                        Cancel</Button>
                    <Button style={styles.button} onPress={confirmHandler}>
                        {isEdting ? 'Update' : 'Add'}</Button>
                </View>
                {isEdting &&
                    <View style={styles.deleteContainer}>
                        <IconButton icon='trash'
                            color={GlobalStyles.colors.error500}
                            size={36}
                            onPress={deleteExpenseHandler} />
                    </View>
                }
            </View> */}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingBottom: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },

  detailConatiner: {
    padding: 25,
    backgroundColor: GlobalStyles.colors.primary50,
    alignItems: 'center',
  },

  textBase: {
    fontSize: 16,
    marginBottom: 4,
    color: 'white',
  },
  amount: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },

  edit: {
    flex: 1,
  },

  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
