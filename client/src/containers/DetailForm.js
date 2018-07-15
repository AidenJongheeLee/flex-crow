import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, Button } from '@material-ui/core';
import { updateInvoice } from '../actions';

class DetailForm extends Component {
  static propTypes = {
    handleBack: func.isRequired,
    handleNext: func.isRequired,
    invoice: object.isRequired,
    updateInvoice: func.isRequired,
    classes: object.isRequired,
  };

  handleChange = (e, field) => {
    const { updateInvoice } = this.props;
    updateInvoice({ field, value: e.target.value });
  };

  render() {
    const { handleNext, handleBack, invoice, classes } = this.props;
    return (
      <div>
        <h2>Create New Invoice</h2>
        <DetailContainer>
          <MainWrapper>
            <DetailText>Details of the service includes...</DetailText>
            <TextField
              fullWidth
              value={invoice.serviceDetail}
              multiline
              onChange={(e) => {
                this.handleChange(e, 'serviceDetail');
              }}
            />

            <DetailText>Which costs a total of...</DetailText>
            <TextField
              type="number"
              value={invoice.price}
              onChange={(e) => {
                this.handleChange(e, 'price');
              }}
              InputProps={{
                endAdornment: <InputAdornment>ETH </InputAdornment>,
              }}
            />
          </MainWrapper>
        </DetailContainer>

        <ButtonContainer>
          <Button
            onClick={() => {
              handleBack();
            }}
          >
            Previous
          </Button>
          <Button
            className={classes.button}
            color="primary"
            onClick={() => {
              handleNext();
            }}
          >
            Next
          </Button>
        </ButtonContainer>
      </div>
    );
  }
}

const MainWrapper = styled.div`
  width: 50%;
  margin: auto;
`;

const DetailContainer = styled.div`
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  width: 80%;
  margin: auto;
  padding: 24pt;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20pt;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DetailText = styled.h4`
  margin-bottom: 1pt;
`;

const styles = {
  button: {
    marginLeft: '10pt',
  },
};

const mapStatetoProps = state => ({
  invoice: state.invoice,
});

export default withStyles(styles)(
  connect(
    mapStatetoProps,
    { updateInvoice },
  )(DetailForm),
);
