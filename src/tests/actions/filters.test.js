import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});

test('should sort list by amount ', () => {
    const action = sortByAmount(1000);
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        amount: 1000
    });
});

test('should sort list by date ', () => {
    const action = sortByDate(1000);
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        date: 1000
    });
});

test('should set a text filter with value', () => {
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    });
});

test('should set a text filter with no value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});