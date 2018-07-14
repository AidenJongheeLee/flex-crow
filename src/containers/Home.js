import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { changeName } from '../actions';

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Button
          onClick={() => {
            this.props.changeName('Jonny');
          }}>
          {this.props.name}
        </Button>
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
