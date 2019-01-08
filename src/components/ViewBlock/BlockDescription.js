import React from 'react';
import TransactonList from './TransactionList';
import './ViewBlock.css';

export const BlockDescription = (props) => {

    return (
        <div>
            <div className="card blockdescstyle">
                <div className="card-header blocktitle">
                    Block: {props.blockVal.height}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Hash: {props.blockVal.hash}</li>
                    <li className="list-group-item">Height: {props.blockVal.height}</li>
                    <li className="list-group-item">Time: {props.blockVal.time}</li>
                    <li className="list-group-item">Size: {props.blockVal.size}</li>
                </ul>
            </div>
            <div><TransactonList data={props.blockVal.tx} /></div>
        </div>

    )

}