import React from 'react';
import './Calc.css';



class Calc extends React.Component {
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
        this.setState({ result: (this.props.rate[typeCurrency].Value * inputCurrency).toFixed(2) })
    }

    render() {
        return (
            <div className="calculator">
                <h3> Калькулятор обмена</h3>
                <div className="block">
                    <div>Я хочу купить</div>
                    <div>
                        <form onSubmit={this.calcRate}>
                            <input type="number" defaultValue="150" name="input--currency" />
                            <select name="type--currency" id="">
                                {Object.keys(this.props.rate).map((keyName) => (
                                    <option key={keyName} value={keyName}>{keyName}</option>
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
            </div>
        )
    }
}

export default Calc;

        // CharCode: "EUR"
        // ID: "R01239"
        // Name: "Евро"
        // Nominal: 1
        // NumCode: "978"
        // Previous: 70.6761
// Value: 70.4111