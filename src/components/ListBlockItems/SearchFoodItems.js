import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlocksWithFilter as fetchBlocksWithFilterActionCreator } from '../../actions/BlocksList/action_creators';

class SearchFoodItems extends Component {
    constructor(props){
        super(props);
        this.state={
            searchText:""
        }
    }

    handleOnChange= (event) => {
        console.log('inside handleOnChange of SearchFoodItems event:', event);
        console.log('inside handleOnChange of SearchFoodItems event.target.id:', event.target.id);
        console.log('inside handleOnChange of SearchFoodItems event.target.value:', event.target.value);
        this.setState({
            searchText:event.target.value
        })
    }

    handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log('inside handleOnSubmit of SearchFoodItems');
        this.props.fetchBlocksWithFilter(this.props.dataCopyForSearch, this.state.searchText);
    }

  render() {
      console.log('inside render of SearchFoodItems this.props:', this.props);
    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
            <input id="searchItem" className="form-control mr-sm-2" placeholder="Search" aria-label="Search" 
                onChange={this.handleOnChange} value={this.state.searchText} />
            <button className="btn btn-outline-success my-2 my-sm-0 search-button-custom" onClick={this.handleOnSubmit}>Search</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    dataCopyForSearch: state.listBlocks.dataCopyForSearch,
  })

const mapDispatchToProps = (dispatch) => ({
    fetchBlocksWithFilter: (data, payload) => dispatch(fetchBlocksWithFilterActionCreator(data, payload))
  })

  export default connect(mapStateToProps, mapDispatchToProps) (SearchFoodItems);