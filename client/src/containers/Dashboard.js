import React, { Component } from 'react';
import _ from 'lodash';
import { func, object, bool } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
  CircularProgress,
} from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import { theme } from '../styles/Theme';
import { submitPayment, fetchInvoices, cancelInvoice } from '../actions';
import DashboardDialog from './DashboardDialog';

class Dashboard extends Component {
  static propTypes = {
    submitPayment: func.isRequired,
    fetchInvoices: func.isRequired,
    cancelInvoice: func.isRequired,
    invoices: object.isRequired,
    loading: bool.isRequired,
  };

  state = {
    anchorEl: null,
    selectedInvoice: '',
    snackbarOpen: false,
    snackbarMsg: '',
    dashboardDialog: false,
  };

  componentDidMount() {
    this.props.fetchInvoices();
  }

  handleClick = () => {
    this.props.submitPayment(3, 99);
  };

  handleClose = () => {
    this.setState({ anchorEl: null, selectedInvoice: {} });
  };

  snackbarClose = () => {
    this.setState({ snackbarOpen: false });
  };

  handleCancelInvoice = () => {
    // todo: cancel invoice
    this.props.cancelInvoice(this.state.selectedInvoice.id);
    this.setState({ snackbarOpen: true, snackbarMsg: 'Canceled Invoice' });
    this.handleClose();
  };

  handleSendReminder = () => {
    // todo: localhost:4000/reminder/invoicd
    this.setState({ snackbarOpen: true, snackbarMsg: 'Message is sent' });
    this.handleClose();
  };

  actionRequired = (invoice) => {
    switch (invoice.status) {
      case 'unpaid':
        return (
          <IconButton
            onClick={(e) => {
              this.setState({ anchorEl: e.currentTarget, selectedInvoice: invoice });
            }}
          >
            <MoreVert />
          </IconButton>
        );

      default:
        return <div />;
    }
  };

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
    const { invoices, loading } = this.props;
    const { anchorEl, snackbarOpen, snackbarMsg, dashboardDialog, selectedInvoice } = this.state;
    return (
      <MainContainer>
        {loading ? (
          <LoadingContainer>
            <CircularProgress />
          </LoadingContainer>
        ) : (
          <div>
            <h2>Invoice Summary</h2>
            <button onClick={this.handleClick}>Test Action</button>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Client Name</TableCell>
                    <TableCell>Total Amount (ETH)</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {invoices && invoices.invoices && invoices.invoices.length > 0 ? (
                    invoices.invoices.map(invoice => (
                      <TableRow
                        key={invoice.id}
                        onClick={() => {
                          this.setState({ selectedInvoice: invoice, dashboardDialog: true });
                        }}
                      >
                        <TableCell>{invoice.id}</TableCell>
                        <TableCell>{invoice.sender_name}</TableCell>
                        <TableCell>{invoice.total_cost}</TableCell>
                        <TableCell>
                          <StatusLabel color={this.renderStatusColor(invoice)}>
                            {_.upperCase(invoice.status)}
                          </StatusLabel>
                        </TableCell>
                        <TableCell>{this.actionRequired(invoice)}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <tr />
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            {selectedInvoice && (
              <DashboardDialog
                selectedInvoice={selectedInvoice}
                open={dashboardDialog}
                onClose={() => {
                  this.setState({ dashboardDialog: false, selectedInvoice: '' });
                }}
              />
            )}

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
              <MenuItem
                onClick={() => {
                  this.handleSendReminder();
                }}
              >
                Send Reminder
              </MenuItem>
              <MenuItem
                onClick={this.handleCancelInvoice}
              >
                Cancel Invoice
              </MenuItem>
            </Menu>
            <Snackbar
              autoHideDuration={3000}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              open={snackbarOpen}
              onClose={this.snackbarClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span>{snackbarMsg}</span>}
            />
          </div>
        )}
      </MainContainer>
    );
  }
}

const LoadingContainer = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusLabel = styled.p`
  color: ${props => (props.color ? props.color : props.theme.textColor)};
`;

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
`;

const MainContainer = styled.div`
  padding: 30px 80px;
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

const mapStateToProps = state => ({
  invoices: state.invoices,
  invoice: state.invoice,
  loading: state.navigation.loading,
});

export default connect(
  mapStateToProps,
  { submitPayment, fetchInvoices, cancelInvoice },
)(Dashboard);
