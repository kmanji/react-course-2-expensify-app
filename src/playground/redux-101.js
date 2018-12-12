import { createStore } from 'redux';

// Action generators - functions that return action objects
// const add = (data) => {
//     return data.a + data.b;
// }
// console.log(add({a: 1, b: 2}));

// const add2 = ({a, b}, c) => {
//     return a + b + c;
// }
// console.log(add2({a: 1, b: 2}, 100));

const incrementCount = ({incrementBy = 1} = {}) => ({ 
    type: 'INCREMENT',
    // incrementBy: incrementBy
    incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count = 0 }) => ({
    type: 'SET',
    count
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy 
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy   
            };
        case 'RESET': 
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default: 
            return state;
    } 
};

const store = createStore(countReducer);

const store1 = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy 
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy   
            };
        case 'RESET': 
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default: 
            return state;
    }   
});

store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(resetCount());

// store.dispatch({
//     type: 'DECREMENT'
// });
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//     type: 'SET',
//     count: 101
// });
store.dispatch(setCount({ count: 101 }));