import React, { Component } from 'react'
import moment from 'moment';
import Table from '../common/Table';

export default class TransactionList extends Component {
    render() {
        const transactionList = this.props.data;
        const data = transactionList !== undefined ? transactionList.map(data => {
            const { tx_index, hash, size } = data; // Get only required columns
            const time = moment(new Date(data.time)).fromNow()
            return { tx_index, hash, time, size };
        }) : null
        return (
            <div>
                {data !== null ? <Table tableData={data} colWidthPercentage={[10, 50, 15, 10]}
                    tableHeading="Transaction List for the Block" linkColValue="View Transaction" /> : null}
            </div>

        )
    }
}
