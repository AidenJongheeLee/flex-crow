import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <MainContainer>
        <h2>Invoice Summary</h2>
        SuccessFully Rendered Dashboard
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  padding: 30px;
`;

const mapStateToProps = state => ({
  name: state.user.name,
});

export default connect(
  mapStateToProps,
  {},
)(Dashboard);
