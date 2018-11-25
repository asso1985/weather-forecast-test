import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_search.scss';

class Search extends Component {
  static propTypes = {
    handleOnSearch: PropTypes.func.isRequired
  }

  handleOnSearch = (e) =>{
    this.props.handleOnSearch(e.target.value);
  }

  render() {
    return (
      <div className="flexgrid flexgrid--full flexgrid--center"> 
        <input className="c-search u-padding--s" onChange={this.handleOnSearch} />
      </div>
    );
  }
};

export default Search;
