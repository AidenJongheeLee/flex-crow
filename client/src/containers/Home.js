import React, { Component } from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { remoteChangeName } from '../actions';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import CreateInvoiceContainer from './CreateInvoiceContainer';

class Home extends Component {
  static propTypes = {
    name: string.isRequired,
    remoteChangeName: func.isRequired,
  };

  render() {
    const { remoteChangeName, name } = this.props;
    return (
      <MainContainer>
        <Sidebar />
        <Button
          onClick={() => {
            remoteChangeName('Jonny');
          }}
        >
          {name}
        </Button>
        <Dashboard />
        <CreateInvoiceContainer />
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
  { remoteChangeName },
)(Home);
