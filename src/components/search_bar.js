import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: '',
      holder: 'Search..'
    };
  }
  render() {
      return (
        <div>
          <input
            value={this.state.term}
            placeholder={this.state.holder}
            onChange={(event) => this.setState({term: event.target.value})} />
        </div>
    );
  }
}

export default SearchBar;
