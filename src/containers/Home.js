import React, { Component } from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { changeName } from '../actions';
import Sidebar from './Sidebar';

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
      <MainContainer>
        <Sidebar />
        <Button
          onClick={() => {
            changeName('Jonny');
          }}
        >
          {name}
        </Button>
        SuccessFully Rendered Home
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  margin-left: 80px;
`;

const mapStatetoProps = state => ({
  name: state.user.name,
});

export default connect(
  mapStatetoProps,
  { changeName },
)(Home);
