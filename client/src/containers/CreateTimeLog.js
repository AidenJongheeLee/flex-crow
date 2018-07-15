import React, { Component } from 'react';
import { object, func } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { TextField, InputAdornment, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { updateInvoice, changeTab, createTimelog } from '../actions';

class CreateTimeLog extends Component {
  static propTypes = {
    timeLog: object.isRequired,
    classes: object.isRequired,
    changeTab: func.isRequired,
    updateInvoice: func.isRequired,
    createTimelog: func.isRequired,
  };

  handleCreateTimeLog = () => {
    const { changeTab, timeLog, createTimelog } = this.props;
    timeLog.created_at = 'Jul 15th';
    createTimelog(timeLog);
    changeTab(4);
  };

  render() {
    const { timeLog, classes, updateInvoice } = this.props;

    return (
      <MainContainer>
        <HeaderText>Create Time Log</HeaderText>
        <FormContainer>
          <FormWrapper>
            <TextField
              fullWidth
              label="Project Name"
              name="project_name"
              value={timeLog.project_name}
              onChange={(e) => {
                updateInvoice({ field: e.target.name, value: e.target.value });
              }}
            />
            <TextField
              className={classes.spacingTop}
              fullWidth
              label="Duration"
              name="duration"
              value={timeLog.duration}
              onChange={(e) => {
                updateInvoice({ field: e.target.name, value: e.target.value });
              }}
              InputProps={{
                endAdornment: <InputAdornment>hr </InputAdornment>,
              }}
            />
            <TextField
              className={classes.spacingTop}
              fullWidth
              label="Due Date"
              name="due_date"
              value={timeLog.due_date}
              onChange={(e) => {
                updateInvoice({ field: e.target.name, value: e.target.value });
              }}
              type="date"
            />
          </FormWrapper>
        </FormContainer>
        <ButtonContainer>
          <Button
            onClick={() => {
              this.handleCreateTimeLog();
            }}
            variant="contained"
            color="primary"
          >
            Create Time Log
          </Button>
        </ButtonContainer>
      </MainContainer>
    );
  }
}

const styles = {
  spacingTop: {
    marginTop: '16pt',
  },
};

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 24pt;
`;

const HeaderText = styled.h2`
  width: 80%;
  margin: auto;
  margin-bottom: 24pt;
`;

const MainContainer = styled.div`
  padding: 30px 80px;
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

const FormWrapper = styled.div`
  width: 50%;
  margin: auto;
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
  background-color: ${props => props.theme.wBackgroundColor};
  padding-bottom: 48pt;
`;

const mapStateToProps = state => ({
  timeLog: state.timeLog,
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { updateInvoice, changeTab, createTimelog },
  )(CreateTimeLog),
);
