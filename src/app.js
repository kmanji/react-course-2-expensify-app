import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.dispatch(addExpense({ description: 'water bill', amount: 4500}));
// store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000}));
// store.dispatch(addExpense({ description: 'rent', amount: 1095}));
// store.dispatch(setTextFilter('gas'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// getVisibleExpenses --> print visible expenses to screen
ReactDOM.render(jsx, document.getElementById('app'));

// ---
// import validator from 'validator';

// console.log(validator.isEmail('test@y.com'));
// ---
// import './utils';
// import subtract, { square, add } from './utils';
// import isSenior, { canDrink, isAdult } from './person';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(4, 100));
// console.log(subtract(114, 100));
// console.log(isAdult(4));
// console.log(canDrink(44));
// console.log(isSenior(66));

