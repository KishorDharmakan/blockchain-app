import React, { Component } from 'react';
import { BlockDescription } from './BlockDescription';
import { connect } from 'react-redux';
import { fetchIndividualBlock as fetchIndividualBlockActionCreator } from '../../actions/ViewBlock/action_creators';

class ViewBlock extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchIndividualBlock(id);
  }

  render() {
    return (
      <div>
        <BlockDescription blockVal={this.props.data} />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  loading: state.viewBlock.loading,
  data: state.viewBlock.data,
  error: state.viewBlock.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchIndividualBlock: (hash) => dispatch(fetchIndividualBlockActionCreator(hash))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewBlock);