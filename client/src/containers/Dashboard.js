import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitInvoice } from '../actions';

class Dashboard extends Component {
  handleClick = () => {
    this.props.submitInvoice(this.props.invoice);
  }
  render() {
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
  invoice: state.invoice,
});

Dashboard.propTypes = {
  invoice: PropTypes.object.isRequired,
  submitInvoice: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { submitInvoice })(Dashboard);
