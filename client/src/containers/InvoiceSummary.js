import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { submitInvoice } from '../actions';
import SummaryForm from './SummaryForm';

class InvoiceSummary extends Component {
  static propTypes = {
    invoice: object.isRequired,
    classes: object.isRequired,
    handleBack: func.isRequired,
    submitInvoice: func.isRequired,
  };

  handleClick = () => {
    this.props.submitInvoice(this.props.invoice);
  };

  render() {
    const { classes, handleBack, invoice } = this.props;
    return (
      <div>
        <InvoiceContainer>
          <SummaryWrapper>
            <SummaryForm invoice={invoice} dashboard={false} />
          </SummaryWrapper>
        </InvoiceContainer>

        <ButtonContainer>
          <Button
            className={classes.buttons}
            onClick={() => {
              handleBack();
            }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={this.handleClick}
            className={classes.buttons}
            color="primary"
          >
            Send Invoice
          </Button>
        </ButtonContainer>
      </div>
    );
  }
}

const styles = {
  spacingLeft: {
    marginLeft: '48pt',
    marginTop: '10pt',
  },
  spacingTop: {
    marginTop: '10pt',
  },
  buttons: {
    marginLeft: '10pt',
    width: '150px',
  },
};

const SummaryWrapper = styled.div`
  width: 50%;
  margin: auto;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20pt;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InvoiceContainer = styled.div`
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  width: 80%;
  margin: auto;
  padding: 24pt;
  background-color: ${props => props.theme.wBackgroundColor};
  padding-bottom: 48pt;
`;

const mapStateToProps = state => ({
  invoice: state.invoice,
  user: state.user,
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { submitInvoice },
  )(InvoiceSummary),
);
