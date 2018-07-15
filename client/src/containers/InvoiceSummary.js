import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { submitInvoice } from '../actions';

class InvoiceSummary extends Component {
  static propTypes = {
    invoice: object.isRequired,
    classes: object.isRequired,
    handleBack: func.isRequired,
    submitInvoice: func.isRequired,
    user: object.isRequired,
  };

  handleClick = () => {
    this.props.submitInvoice(this.props.invoice);
  };

  render() {
    const { invoice, classes, handleBack, user } = this.props;

    return (
      <div>
        <h2>Create New Invoice</h2>
        <InvoiceContainer>
          <SummaryWrapper>
            <InvoiceHeader>Invoice#</InvoiceHeader>
            <TopContainer>
              <TextLabel>From</TextLabel>
              <TextLabel last>To</TextLabel>
            </TopContainer>
            <TopContainer>
              <TextField className={classes.spacingTop} fullWidth disabled value={user.name} />
              <TextField
                fullWidth
                className={classes.spacingLeft}
                disabled
                value={invoice.sender_name}
              />
            </TopContainer>
            <TopContainer>
              <TextField className={classes.spacingTop} fullWidth disabled value={user.email} />
              <TextField
                fullWidth
                className={classes.spacingLeft}
                disabled
                value={invoice.to_email}
              />
            </TopContainer>
            <TextField
              className={classes.spacingTop}
              fullWidth
              disabled
              label="Project Name"
              value={invoice.project_name}
            />
            <TextField
              className={classes.spacingTop}
              fullWidth
              disabled
              label="Service Detail"
              value={invoice.description}
            />
            <TextField
              className={classes.spacingTop}
              fullWidth
              disabled
              label="Billing Frequency"
              value={invoice.invoice_type}
            />
            <TextField
              className={classes.spacingTop}
              disabled
              label="Total cost"
              value={invoice.total_cost}
              InputProps={{
                endAdornment: <InputAdornment>ETH </InputAdornment>,
              }}
            />
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

const TextLabel = styled.p`
  font-size: 1rem;
  flex: 1;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 0px;
  margin-left: ${props => (props.last ? '48pt' : '0pt')};
`;

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

const TopContainer = styled.div`
  display: flex;
`;

const InvoiceHeader = styled.h4``;

const InvoiceContainer = styled.div`
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  width: 80%;
  margin: auto;
  padding: 24pt;
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
