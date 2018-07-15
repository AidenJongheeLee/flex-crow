import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import { theme } from '../styles/Theme';
import { fetchInvoices } from '../actions';

class MainDashboard extends Component {
  static propTypes = {
    timeLogs: object.isRequired,
    invoices: object.isRequired,
    fetchInvoices: func.isRequired,
  };

  componentDidMount() {
    this.props.fetchInvoices();
  }

  renderStatusColor = (invoice) => {
    switch (invoice.status) {
      case 'paid':
        return theme.successColor;
      case 'cancelled':
        return theme.errorColor;
      default:
        return theme.textColor;
    }
  };

  render() {
    const { timeLogs, invoices } = this.props;
    return (
      <MainContainer>
        <FlexContainer>
          <TimeLogWrapper>
            <h4>Recent Time logs</h4>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Project Name</TableCell>
                  <TableCell>Duration (hr)</TableCell>
                  <TableCell>Created at </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {timeLogs.timeLogs &&
                  timeLogs.timeLogs.map(timelog => (
                    <TableRow key={timelog.id}>
                      <TableCell>{timelog.project_name}</TableCell>
                      <TableCell>{timelog.duration} hours</TableCell>
                      <TableCell>{timelog.created_at}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TimeLogWrapper>
          <WorkedHour>
            <h4>Hours worked this week </h4>
            <HourText> 32</HourText>
          </WorkedHour>
        </FlexContainer>
        <InvoiceTableWrapper>
          <h4>Recent Invoices </h4>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Client Name</TableCell>
                <TableCell>Total Amount (ETH)</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices && invoices.invoices && invoices.invoices.length > 0 ? (
                invoices.invoices
                  .reverse()
                  .slice(0, 5)
                  .map(invoice => (
                    <TableRow
                      key={invoice.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        this.setState({
                          selectedInvoice: invoice,
                          dashboardDialog: true,
                        });
                      }}
                    >
                      <TableCell>{invoice.sender_name}</TableCell>
                      <TableCell>{invoice.total_cost / 100} ETH</TableCell>
                      <TableCell>
                        <StatusLabel color={this.renderStatusColor(invoice)}>
                          {_.upperCase(invoice.status)}
                        </StatusLabel>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <tr />
              )}
            </TableBody>
          </Table>
        </InvoiceTableWrapper>
      </MainContainer>
    );
  }
}

const HourText = styled.h1`
  font-size: 48pt;
  text-align: center;
`;

const StatusLabel = styled.p`
  color: ${props => (props.color ? props.color : props.theme.textColor)};
`;

const FlexContainer = styled.div`
  display: flex;
`;

const TimeLogWrapper = styled.div`
  flex: 2;
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

const WorkedHour = styled.div`
  flex: 1;
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
  margin-left: 24pt;
`;

const InvoiceTableWrapper = styled.div`
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
  background-color: ${props => props.theme.backgroundColor};
`;

const mapStateToProps = state => ({
  timeLogs: state.timeLogs,
  invoices: state.invoices,
});

export default connect(
  mapStateToProps,
  { fetchInvoices },
)(MainDashboard);
