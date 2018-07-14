import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TextField, InputAdornment, Button } from '@material-ui/core';
import { updateInovie } from '../actions';

class DetailForm extends Component {
  static propTypes = {
    handleBack: func.isRequired,
    handleNext: func.isRequired,
    invoice: object.isRequired,
    updateInovie: func.isRequired,
  };

  handleChange = (e, field) => {
    const { updateInovie } = this.props;
    updateInovie({ field, value: e.target.value });
  };

  render() {
    const { handleNext, handleBack, invoice } = this.props;
    return (
      <div>
        <h2>Create New Invoice</h2>
        <DetailText>Details of the service includes...</DetailText>
        <TextField
          value={invoice.serviceDetail}
          multiline
          onChange={(e) => {
            this.handleChange(e, 'serviceDetail');
          }}
        />

        <DetailText>Which costs ~ totla of...</DetailText>
        <TextField
          type="number"
          value={invoice.price}
          onChange={(e) => {
            this.handleChange(e, 'price');
          }}
          InputProps={{
            startAdornment: <InputAdornment>ETH </InputAdornment>,
          }}
        />

        <ButtonContainer>
          <Button
            onClick={() => {
              handleBack();
            }}
          >
            Previous
          </Button>
          <Button
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

const ButtonContainer = styled.div`
  text-align: center;
`;

const DetailText = styled.h4`
  margin-bottom: 1pt;
`;

const mapStatetoProps = state => ({
  invoice: state.invoice,
});

export default connect(
  mapStatetoProps,
  { updateInovie },
)(DetailForm);
