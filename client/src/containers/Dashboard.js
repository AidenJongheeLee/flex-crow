import React, { Component } from 'react';
import { object, func } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { submitInvoice, fetchInvoices } from '../actions';

class Dashboard extends Component {
  static propTypes = {
    submitInvoice: func.isRequired,
    invoice: object.isRequired,
    fetchInvoices: func.isRequired,
  };

  componentDidMount() {
    this.props.fetchInvoices();
  }

  handleClick = () => {
    this.props.submitInvoice(this.props.invoice);
  };
  render() {
    return (
      <MainContainer>
        <h2>Invoice Summary</h2>
        <button onClick={this.handleClick}>Test Action</button>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  padding: 30px;
`;

const mapStateToProps = state => ({
  invoices: state.invoices,
  invoice: state.invoice,
});

export default connect(
  mapStateToProps,
  { submitInvoice, fetchInvoices },
)(Dashboard);
