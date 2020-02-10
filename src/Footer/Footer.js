import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer id="footer" className="footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="flex-container">
                            <div className="flex-item">
                                <h1 className="footer-title">Казаков А.</h1>
                                <p> All Rights Reserved</p>

                            </div>

                        </div>
                    </div>
                </div>
            </footer >
        )
    }
}

export default Footer;