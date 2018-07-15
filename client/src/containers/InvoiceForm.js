import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TextField, FormControl, InputLabel, MenuItem, Select, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { updateInvoice } from '../actions';

class InvoiceForm extends Component {
  static propTypes = {
    classes: object.isRequired,
    handleNext: func.isRequired,
    invoice: object.isRequired,
    updateInvoice: func.isRequired,
  };

  handleChangeField = (value, field) => {
    const { updateInvoice } = this.props;
    updateInvoice({ field, value });
  };

  handleSelectClient = (value) => {
    const { updateInvoice } = this.props;
    if (value !== 'create') {
      updateInvoice({ field: 'selectedClient', value });
    } else {
      updateInvoice({ field: 'newClient', value: true });
      updateInvoice({ field: 'selectedClient', value: 'create' });
    }
  };

  render() {
    const { classes, handleNext, invoice } = this.props;
    return (
      <div>
        <h2>Create New Invoice</h2>
        <FormContainer>
          <FormWrapper>
            <InvoiceText marginBottom="4pt">This invoice is billed to...</InvoiceText>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="name-error">Client</InputLabel>
              <Select
                fullWidth
                value={invoice.selectedClient}
                onChange={(e) => {
                  this.handleSelectClient(e.target.value);
                }}
              >
                <MenuItem value="create">Add New Client</MenuItem>
              </Select>
            </FormControl>
            {invoice.newClient && (
              <TextFieldContainer>
                <TextField
                  className={classes.TextField}
                  fullWidth
                  name="sender_name"
                  label="Client Name"
                  onChange={(e) => {
                    this.handleChangeField(e.target.value, e.target.name);
                  }}
                  value={invoice.name}
                />
                <TextField
                  className={classes.TextField}
                  fullWidth
                  name="to_email"
                  label="Client Email"
                  onChange={(e) => {
                    this.handleChangeField(e.target.value, e.target.name);
                  }}
                  value={invoice.email}
                />
              </TextFieldContainer>
            )}

            <InvoiceText>The invoice is for...</InvoiceText>
            <TextField
              className={classes.TextField}
              fullWidth
              name="project_name"
              label="Project Name"
              onChange={(e) => {
                this.handleChangeField(e.target.value, e.target.name);
              }}
              value={invoice.projectName}
            />

            <InvoiceText>and to be billed...</InvoiceText>
            <Select
              fullWidth
              value={invoice.invoice_type}
              onChange={(e) => {
                this.handleChangeField(e.target.value, 'invoice_type');
              }}
            >
              <MenuItem value="One-time">One-time</MenuItem>
              <MenuItem value="Recurring">Recurring</MenuItem>
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

const TextFieldContainer = styled.div`
  margin-top: 10pt;
`;

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
  flex-direction: row;
  justify-content: center;
`;

const InvoiceText = styled.h4`
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '1pt')};
`;

const styles = {
  formControl: {
    width: '100%',
  },
  TextField: {
    marginTop: '10pt',
  },
};

const mapStatetoProps = state => ({
  invoice: state.invoice,
});

export default connect(
  mapStatetoProps,
  { updateInvoice },
)(withStyles(styles)(InvoiceForm));
