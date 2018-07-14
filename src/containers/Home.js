import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { changeName } from '../actions';
import Dashboard from './Dashboard';

class Home extends Component {
  static propTypes = {
    name: string.isRequired,
    changeName: func.isRequired,
  };

  handleClick = () => {
    const { name } = this.props;
    console.log(name);
  };

  render() {
    const { changeName, name } = this.props;
    console.log(this.props);
    return (
      <div>
        <Button
          onClick={() => {
            changeName('Jonny');
          }}
        >
          {name}
        </Button>
        <Dashboard />
        SuccessFully Rendered Home
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  name: state.user.name,
});

export default connect(
  mapStatetoProps,
  { changeName },
)(Home);
