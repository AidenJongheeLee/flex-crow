import React, { Component } from 'react';
import { object, func } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Checkbox,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { theme } from '../styles/Theme';
import { selectTimeLog, changeTab } from '../actions';

class TimeLogContainer extends Component {
  static propTypes = {
    timeLogs: object.isRequired,
    selectTimeLog: func.isRequired,
    classes: object.isRequired,
    changeTab: func.isRequired,
  };

  handleSelectAll = () => {
    const { selectTimeLog, timeLogs } = this.props;
    const allIds = [];
    timeLogs.timeLogs.forEach((timelog) => {
      allIds.push(timelog.id);
    });
    if (timeLogs.selected.length === timeLogs.timeLogs.length) {
      selectTimeLog([]);
    } else {
      selectTimeLog(allIds);
    }
  };

  handleSelect = (id) => {
    const { selectTimeLog, timeLogs } = this.props;
    const selected = timeLogs.selected;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    } else {
      newSelected = newSelected.concat(selected, id);
    }
    selectTimeLog(newSelected);
  };

  render() {
    const { timeLogs, classes, changeTab } = this.props;
    return (
      <MainContainer>
        <h2>Time Log</h2>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            changeTab(4);
          }}
        >
          Create New Time Log
        </Button>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    classes={{ checked: classes.checkbox }}
                    checked={timeLogs.selected.length === timeLogs.timeLogs.length}
                    onChange={() => {
                      this.handleSelectAll();
                    }}
                  />
                </TableCell>
                <TableCell>Project Name</TableCell>
                <TableCell>Duration (hr)</TableCell>
                <TableCell>Created at </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {timeLogs.timeLogs &&
                timeLogs.timeLogs.map(timelog => (
                  <TableRow key={timelog.id}>
                    <TableCell>
                      <Checkbox
                        classes={{ checked: classes.checkbox }}
                        checked={timeLogs.selected.includes(timelog.id)}
                        onChange={() => {
                          this.handleSelect(timelog.id);
                        }}
                      />
                    </TableCell>
                    <TableCell>{timelog.project_name}</TableCell>
                    <TableCell>{timelog.duration}</TableCell>
                    <TableCell>{timelog.created_at}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MainContainer>
    );
  }
}

const TableContainer = styled.div`
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  width: 80%;
  margin: auto;
  padding: 24pt;
  width: 100%;
  background-color: ${props => props.theme.wBackgroundColor};
  margin-top: 16pt;
`;

const MainContainer = styled.div`
  padding: 30px 80px;
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

const styles = {
  checkbox: {
    color: `${theme.secondaryColor} !important`,
  },
};

const mapStateToProps = state => ({
  timeLogs: state.timeLogs,
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { selectTimeLog, changeTab },
  )(TimeLogContainer),
);
