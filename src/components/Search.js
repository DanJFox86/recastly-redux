import React from 'react';
import handleSearchChange from '../actions/search.js';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    this.props.handleSearchInputChange('react tutorials');
  }

  getYouTubeVideos(query) {
    this.props.handleSearchInputChange(query);
  }

  handleInputChange(e) {
    this.getYouTubeVideos(e.target.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"


        />
        <button className="btn hidden-sm-down" onClick={this.handleInputChange.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
