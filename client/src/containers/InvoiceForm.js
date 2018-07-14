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
        <InvoiceText>This invoice is billed to...</InvoiceText>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-error">New Client</InputLabel>
          <Select
            value={invoice.clientSelect}
            onChange={(e) => {
              this.handleChangeField(e, 'clientSelect');
            }}
          >
            <MenuItem value={'Aiden'}>Aiden</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={classes.TextField}
          name="name"
          label="Name"
          onChange={(e) => {
            this.handleChangeField(e, 'name');
          }}
          value={invoice.name}
        />
        <TextField
          className={classes.TextField}
          name="email"
          label="Email"
          onChange={(e) => {
            this.handleChangeField(e, 'email');
          }}
          value={invoice.email}
        />

        <InvoiceText>The invoice is for...</InvoiceText>
        <TextField
          className={classes.TextField}
          name="projectName"
          label="Project Name"
          onChange={(e) => {
            this.handleChangeField(e, 'projectName');
          }}
          value={invoice.projectName}
        />

        <InvoiceText>and is billed from...</InvoiceText>
        <Select
          value={invoice.billedSelect}
          onChange={(e) => {
            this.handleChangeField(e, 'billedSelect');
          }}
        >
          <MenuItem value={1}>One time</MenuItem>
        </Select>
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

const ButtonContainer = styled.div`
  text-align: center;
`;

const InvoiceText = styled.h4`
  margin-bottom: 1pt;
`;

const styles = {
  formControl: {
    width: '120px',
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
