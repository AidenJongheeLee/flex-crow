import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { TextField, Button, InputAdornment } from '@material-ui/core';

class InvoiceSummary extends Component {
  static propTypes = {
    invoice: object.isRequired,
    classes: object.isRequired,
    handleBack: func.isRequired,
  };

  render() {
    const { invoice, classes, handleBack } = this.props;

    return (
      <div>
        <h2>Create New Invoice</h2>
        <InvoiceContainer>
          <SummaryWrapper>
            <InvoiceHeader>Invoice#</InvoiceHeader>
            <TopContainer>
              <TextField fullWidth disabled label="From" value={invoice.clientSelect} />
              <TextField
                fullWidth
                className={classes.spacingLeft}
                disabled
                label="To"
                value={invoice.name}
              />
            </TopContainer>
            <TextField
              className={classes.spacingTop}
              fullWidth
              disabled
              label="Project Name"
              value={invoice.projectName}
            />
            <TextField
              className={classes.spacingTop}
              fullWidth
              disabled
              label="Service Detail"
              value={invoice.serviceDetail}
            />
            <TextField
              className={classes.spacingTop}
              fullWidth
              disabled
              label="Total cost"
              value={invoice.price}
              InputProps={{
                startAdornment: <InputAdornment>ETH </InputAdornment>,
              }}
            />
          </SummaryWrapper>
        </InvoiceContainer>

        <ButtonContainer>
          <Button className={classes.buttons} color="primary">
            Send Invoice
          </Button>

          <Button
            className={classes.buttons}
            onClick={() => {
              handleBack();
            }}
          >
            Previous
          </Button>
        </ButtonContainer>
      </div>
    );
  }
}

const styles = {
  spacingLeft: {
    marginLeft: '10pt',
  },
  spacingTop: {
    marginTop: '10pt',
  },
  buttons: {
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
  flex-direction: column;
  align-items: center;
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
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {},
  )(InvoiceSummary),
);
