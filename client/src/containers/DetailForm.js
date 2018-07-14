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

            <DetailText>Which costs ~ totla of...</DetailText>
            <TextField
              fullWidth
              type="number"
              value={invoice.price}
              onChange={(e) => {
                this.handleChange(e, 'price');
              }}
              InputProps={{
                startAdornment: <InputAdornment>ETH </InputAdornment>,
              }}
            />
          </MainWrapper>
        </DetailContainer>

        <ButtonContainer>
          <Button
            color="primary"
            onClick={() => {
              handleNext();
            }}
          >
            Next
          </Button>
          <Button
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
  flex-direction: column;
  align-items: center;
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
