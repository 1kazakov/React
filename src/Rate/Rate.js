import React from 'react';
import './Rate.css';
// import { get } from 'http';

import Calc from '../Calc/Calc';


class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            currencyRate: {}
        }
        this.currency = ['USD', 'EUR', 'AMD']
        this.getRate()
    }
    getRate = () => {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((response) => {
                return response.json();
            })
            .then((response) => {

                let date = new Date(response.Date);
                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = response.Valute[this.currency[i]]
                }
                this.setState({ currencyRate: result, date: ` ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}` });
            })

    }
    render() {
        return (
            <div>
                <h3> Курс валют на{this.state.date}</h3>
                <div className="flex-container">

                    {Object.keys(this.state.currencyRate).map((keyName) => (
                        <div className="block flex-item" key={keyName}>
                            <div className="currency-name">{keyName}</div>
                            <div className="currency-in">1 {this.state.currencyRate[keyName].Name} стоит {this.state.currencyRate[keyName].Value.toFixed(2)} руб.</div>
                        </div>
                    ))}

                </div>
                <Calc rate={this.state.currencyRate} />
            </div>
        )
    }
}

export default Rate;
