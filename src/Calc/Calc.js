import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Calc.css';
import * as selectors from '../store/reducer';


class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        }
    }

    calcRate = (evt) => {
        evt.preventDefault();
        let elements = evt.target.elements;
        let inputCurrency = elements['input--currency'].value;
        let typeCurrency = elements['type--currency'].value;
        this.setState({ result: (this.props.currency[typeCurrency].Value * inputCurrency).toFixed(2) })
    }

    render() {
        const { currency = {} } = this.props
        return (
            <div className="calculator">
                <h3> Калькулятор обмена</h3>
                <div className="block">
                    <div>Я хочу купить</div>
                    <div>
                        <form onSubmit={this.calcRate}>
                            <input type="number" defaultValue="150" name="input--currency" />
                            <select name="type--currency" >
                                {Object.keys(currency).map((keyName) => (
                                    < option key={keyName} value={keyName} > {keyName}</option>
                                ))}
                            </select>
                            <input type="submit" defaultValue="calc" />
                        </form>
                    </div>
                    <div>
                        <h4>Результат</h4>
                        <ul className="calc-res">
                            <li>Вам понадобится {this.state.result} руб.</li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currency: selectors.getCurrency(state)
    }
}

export default connect(mapStateToProps)(Calc);
