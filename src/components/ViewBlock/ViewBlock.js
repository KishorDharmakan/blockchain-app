import React, { Component } from 'react';
import { BlockDescription } from './BlockDescription';

export default class ViewBlock extends Component {
  render() {
      console.log('inside render of ViewBlock this.props:', this.props);
      const { id } = this.props.match.params;
        console.log("id:", id);
    return (
      <div>
        <BlockDescription />
      </div>
    )
  }
}
