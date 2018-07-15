import React, { Component } from 'react';
import { object, func } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { submitInvoice } from '../actions';

class Dashboard extends Component {
  static propTypes = {
    invoices: object.isRequired,
    submitInvoice: func.isRequired,
    invoice: object.isRequired,
  };

  handleClick = () => {
    this.props.submitInvoice(this.props.invoice);
  };
  render() {
    const { invoices } = this.props;
    console.log(invoices);
    return (
      <MainContainer>
        <h2>Invoice Summary</h2>
        <button onClick={this.handleClick}>Submit</button>
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
  { submitInvoice },
)(Dashboard);
