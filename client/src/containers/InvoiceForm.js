import React, { Component } from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import { TextField, FormControl, InputLabel, MenuItem, Select, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class InvoiceForm extends Component {
  static propTypes = {
    classes: object.isRequired,
  };

  state = {
    clientSelect: '',
    name: '',
    email: '',
    projectName: '',
    billedSelect: 1,
  };

  handleChangeField = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { classes, handleNext } = this.props;
    return (
      <div>
        <h2>Create New Invoice</h2>
        <InvoiceText>This invoice is billed to...</InvoiceText>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-error">New Client</InputLabel>
          <Select
            value={this.state.clientSelect}
            onChange={(e) => {
              this.setState({ clientSelect: e.target.value });
            }}
          >
            <MenuItem value={1}>Aiden</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={classes.TextField}
          name="name"
          label="Name"
          onChange={(e) => {
            this.handleChangeField(e, 'name');
          }}
          value={this.state.name}
        />
        <TextField
          className={classes.TextField}
          name="email"
          label="Email"
          onChange={(e) => {
            this.handleChangeField(e, 'email');
          }}
          value={this.state.email}
        />

        <InvoiceText>The invoice is for...</InvoiceText>
        <TextField
          className={classes.TextField}
          name="projectName"
          label="Project Name"
          onClick={(e) => {
            this.handleChangeField(e, 'projectName');
          }}
          value={this.state.projectName}
        />

        <InvoiceText>and is billed from...</InvoiceText>
        <Select
          value={this.state.billedSelect}
          onChange={(e) => {
            this.setState({ billedSelect: e.target.value });
          }}
        >
          <MenuItem value={1}>One time</MenuItem>
        </Select>
        <ButtonContainer>
          <Button onClick={() => {}}>Previous</Button>
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
  text-align: right;
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

export default withStyles(styles)(InvoiceForm);
