import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlocks as fetchBlocksActionCreator } from '../../actions/BlocksList/action_creators';
import Table from '../common/Table';
import Spinner from '../common/Spinner';
import Alert from '../common/Alert';

class ListBlockItems extends Component {
  componentDidMount(){
    console.log('inside componentDidMount of ListBlockItems this.props:', this.props);
    this.props.fetchBlocks();
  }
  
  render() {
    console.log('inside render of ListBlockItems this.props:', this.props);
    console.log('inside render of ListBlockItems this.props.error:', this.props.error);
    return (
      <div>
        { this.props.loading 
          ? 
          <Spinner /> 
          : 
          this.props.error ? <Alert errorMessage={this.props.error}/> :<Table tableData={this.props.data} colWidthPercentage={[10,50,15,10]}/> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.listBlocks.loading,
  data: state.listBlocks.data,
  error: state.listBlocks.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchBlocks: () => dispatch(fetchBlocksActionCreator())
})

export default connect(mapStateToProps, mapDispatchToProps) (ListBlockItems);