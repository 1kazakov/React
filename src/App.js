import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';
import CookieWarning from './CookieWarning/CookieWarning';

import * as actions from './store/actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: true,
    }
  }
  onClick = (value) => {
    this.setState({ showWarning: false })
  }

  render() {
    this.props.dispatch(actions.getData());
    return (
      <Router>

        <Header />

        <div className="container" style={{ marginBottom: '100px' }}>
          <main>
            <Switch>
              <Route exact path="/" component={Rate} />
              <Route exact path="/about" component={About} />
            </Switch>
          </main>
        </div>

        {this.state.showWarning ? <CookieWarning onclick={this.onClick} /> : null}
        <Footer />
      </Router>
    )
  }
}

export default connect()(App);
