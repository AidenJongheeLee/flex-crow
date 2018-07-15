import React, { Component } from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Dashboard extends Component {
  static propTypes = {
    invoices: object.isRequired,
  };

  render() {
    const { invoices } = this.props;
    console.log(invoices);
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
  invoices: state.invoices,
});

export default connect(
  mapStateToProps,
  {},
)(Dashboard);
