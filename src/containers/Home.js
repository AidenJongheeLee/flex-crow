import React, { Component } from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import CreateInvoiceContainer from './CreateInvoiceContainer';
import TimeLogContainer from './TimeLogContainer';
import CreateTimeLog from './CreateTimeLog';
import MainDashboard from './MainDashboard';

class Home extends Component {
  static propTypes = {
    currentTab: number.isRequired,
  };

  render() {
    const { currentTab } = this.props;
    return (
      <MainContainer>
        <Sidebar />
        {currentTab === 1 && <MainDashboard />}
        {currentTab === 2 && <Dashboard />}
        {currentTab === 3 && <CreateInvoiceContainer />}
        {currentTab === 4 && <TimeLogContainer />}
        {currentTab === 5 && <CreateTimeLog />}
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
