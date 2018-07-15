import React, { Component } from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import CreateInvoiceContainer from './CreateInvoiceContainer';
import TimeLogContainer from './TimeLogContainer';
import CreateTimeLog from './CreateTimeLog';

class Home extends Component {
  static propTypes = {
    currentTab: number.isRequired,
  };

  render() {
    const { currentTab } = this.props;
    return (
      <MainContainer>
        <Sidebar />
        {currentTab === 1 && <Dashboard />}
        {currentTab === 2 && <CreateInvoiceContainer />}
        {currentTab === 3 && <TimeLogContainer />}
        {currentTab === 4 && <CreateTimeLog />}
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  margin-left: 80px;
  height: 100%;
`;

const mapStatetoProps = state => ({
  currentTab: state.navigation.currentTab,
});

export default connect(
  mapStatetoProps,
  {},
)(Home);
