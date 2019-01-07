import React, { Component } from 'react'
import './common.css';

export default class JumboTron extends Component {
    render() {
        return (
            <div className="jumbo-custom jumbotron">
                <h1 className="display-h1">{this.props.title}</h1>
                <p className="lead">This is a blockchain application to view the blocks and transactions</p>
                <hr className="my-4"/>
                    <p>To get more information about blockchain, please click the button below</p>
                    <a className="btn btn-primary btn-lg btn-color-custom" href="null" role="button">Learn more</a>
                </div>
                )
              }
            }
