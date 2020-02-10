import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Rate.css';

import * as selectors from '../store/reducer';

import Calc from '../Calc/Calc';


class Rate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        }
    }

    render() {
        console.log('currency', this.props.currency)
        const { currency = {} } = this.props;
        return (
            <div>
                <h3 > Курс валют на{this.state.date}</h3>
                <div className="flex-container">

                    {Object.keys(currency).map((keyName) => (
                        <div className="block flex-item" key={keyName}>
                            <div className="currency-name">{keyName}</div>
                            <div className="currency-in">1 {currency[keyName].Name} стоит {currency[keyName].Value.toFixed(2)} руб.</div>
                        </div>
                    ))}

                </div>
                <Calc />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currency: selectors.getCurrency(state)
    }
}

export default connect(mapStateToProps)(Rate);
