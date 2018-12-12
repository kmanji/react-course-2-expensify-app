import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditDashboardPage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    // dispatch the action to edit the expense
                    props.dispatch(editExpense(props.expense.id, expense));
                    // redirect to the dashboard
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({id: props.expense.id}));
                props.history.push('/');
            }}>
                Remove
            </button>
        </div>
    );
};

const mapStateToProps = (state, props) =>  {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(EditDashboardPage);