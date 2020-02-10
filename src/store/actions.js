import { SET_DATA } from './actionType';

const setData = (data) => {
    return {
        type: SET_DATA,
        payload: data,
    }
}

export const getData = () => {
    return async dispatch => {
        let response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        response = await response.json();
        const currency = ['USD', 'EUR', 'AMD'];
        let result = {};
        for (let i = 0; i < currency.length; i++) {
            result[currency[i]] = response.Valute[currency[i]];
        }
        dispatch(setData(result));
    }
}
