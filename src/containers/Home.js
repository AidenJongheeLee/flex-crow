import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeName } from '../actions';

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button
          onClick={() => {
            this.props.changeName('Jonny');
          }}>
          {this.props.name}
        </button>
        SuccessFully Rendered Home
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    name: state.user.name
  };
};

export default connect(
  mapStatetoProps,
  { changeName }
)(Home);
