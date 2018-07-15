import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
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
  Button,
} from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import { theme } from '../styles/Theme';
import { submitPayment, fetchInvoices, cancelInvoice, changeTab } from '../actions';
import DashboardDialog from './DashboardDialog';

class Dashboard extends Component {
  static propTypes = {
    submitPayment: func.isRequired,
    fetchInvoices: func.isRequired,
    cancelInvoice: func.isRequired,
    invoices: object.isRequired,
    loading: bool.isRequired,
    classes: object.isRequired,
    changeTab: func.isRequired,
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
    const { classes } = this.props;
    switch (invoice.status) {
      case 'unpaid':
        return (
          <IconButton
            className={classes.iconButton}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({
                anchorEl: e.currentTarget,
                selectedInvoice: invoice,
              });
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
    const { invoices, loading, classes } = this.props;
    const { anchorEl, snackbarOpen, snackbarMsg, dashboardDialog, selectedInvoice } = this.state;
    return (
      <div style={{ height: '100%' }}>
        {loading ? (
          <LoadingContainer>
            <CircularProgress />
          </LoadingContainer>
        ) : (
          <MainContainer>
            <div>
              <h2>Invoice Summary</h2>
              <Button
                onClick={() => {
                  this.props.changeTab(3);
                }}
                color="primary"
                variant="contained"
              >
                Create New Invoice
              </Button>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
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
                          hover
                          className={classes.tableRow}
                          key={invoice.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            this.setState({ selectedInvoice: invoice, dashboardDialog: true });
                          }}
                        >
                          <TableCell>{invoice.sender_name}</TableCell>
                          <TableCell>{invoice.total_cost / 100}</TableCell>
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
                <MenuItem onClick={this.handleCancelInvoice}>Cancel Invoice</MenuItem>
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
          </MainContainer>
        )}
      </div>
    );
  }
}

const styles = {
  iconButton: {
    zIndex: 3,
  },
  tableRow: {
    cursor: 'pointer',
  },
};

const LoadingContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};
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
  margin-top: 16pt;
  background-color: ${props => props.theme.wBackgroundColor};
`;

const MainContainer = styled.div`
  padding: 30px 80px;
  height: auto;
  background-color: ${props => props.theme.backgroundColor};
`;

const mapStateToProps = state => ({
  invoices: state.invoices,
  invoice: state.invoice,
  loading: state.navigation.loading,
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { submitPayment, fetchInvoices, cancelInvoice, changeTab },
  )(Dashboard),
);
