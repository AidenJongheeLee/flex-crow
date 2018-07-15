import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitInvoice } from '../actions';

class Dashboard extends Component {
  handleClick = () => {
    this.props.submitInvoice(this.props.invoice);
  }
  render() {
    return (
      <div>
        <div>SuccessFully Rendered Dashboard</div>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  invoice: state.invoice,
});

Dashboard.propTypes = {
  invoice: PropTypes.object.isRequired,
  submitInvoice: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { submitInvoice })(Dashboard);
