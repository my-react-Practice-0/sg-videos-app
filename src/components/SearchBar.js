import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  OnInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  OnFormSubmit = (e) => {
    e.preventDefault();

    //CB from parent
    this.props.parentOnFormSubmit(this.state.term)
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.OnFormSubmit}>
          <div className="field">
            <label>Video Search:</label>
            <input
              onChange={this.OnInputChange}
              value={this.state.term}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}
