import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TextField, FormControl, InputLabel, MenuItem, Select, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { updateInovie } from '../actions';

class InvoiceForm extends Component {
  static propTypes = {
    classes: object.isRequired,
    handleNext: func.isRequired,
    invoice: object.isRequired,
    updateInovie: func.isRequired,
  };

  handleChangeField = (e, field) => {
    const { updateInovie } = this.props;
    updateInovie({ field, value: e.target.value });
  };

  render() {
    const { classes, handleNext, invoice } = this.props;
    return (
      <div>
        <h2>Create New Invoice</h2>
        <FormContainer>
          <FormWrapper>
            <InvoiceText>This invoice is billed to...</InvoiceText>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="name-error">New Client</InputLabel>
              <Select
                fullWidth
                value={invoice.clientSelect}
                onChange={(e) => {
                  this.handleChangeField(e, 'clientSelect');
                }}
              >
                <MenuItem value={'Aiden'}>Aiden</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              name="name"
              label="Name"
              onChange={(e) => {
                this.handleChangeField(e, 'name');
              }}
              value={invoice.name}
            />
            <TextField
              fullWidth
              name="email"
              label="Email"
              onChange={(e) => {
                this.handleChangeField(e, 'email');
              }}
              value={invoice.email}
            />

            <InvoiceText>The invoice is for...</InvoiceText>
            <TextField
              fullWidth
              name="projectName"
              label="Project Name"
              onChange={(e) => {
                this.handleChangeField(e, 'projectName');
              }}
              value={invoice.projectName}
            />

            <InvoiceText>and is billed from...</InvoiceText>
            <Select
              fullWidth
              value={invoice.billedSelect}
              onChange={(e) => {
                this.handleChangeField(e, 'billedSelect');
              }}
            >
              <MenuItem value={1}>One time</MenuItem>
            </Select>
          </FormWrapper>
        </FormContainer>
        <ButtonContainer>
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

const FormContainer = styled.div`
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  width: 80%;
  margin: auto;
  padding: 24pt;
`;

const FormWrapper = styled.div`
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

const InvoiceText = styled.h4`
  margin-bottom: 1pt;
`;

const styles = {
  formControl: {
    width: '100%',
  },
  TextField: {
    display: 'flex',
    width: '120px',
    marginTop: '5pt',
  },
};

const mapStatetoProps = state => ({
  invoice: state.invoice,
});

export default connect(
  mapStatetoProps,
  { updateInovie },
)(withStyles(styles)(InvoiceForm));
