import React, { Component } from 'react';
import _ from 'lodash';
import { array, func, object } from 'prop-types';
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
} from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import { theme } from '../styles/Theme';
import { submitInvoice, fetchInvoices } from '../actions';

class Dashboard extends Component {
  static propTypes = {
    submitInvoice: func.isRequired,
    invoice: object.isRequired,
    fetchInvoices: func.isRequired,
    invoices: array.isRequired,
  };

  state = {
    anchorEl: null,
    selectedInvoice: {},
    snackbarOpen: false,
    snackbarMsg: '',
  };

  componentDidMount() {
    this.props.fetchInvoices();
  }

  handleClick = () => {
    this.props.submitInvoice(this.props.invoice);
  }

  handleClose = () => {
    this.setState({ anchorEl: null, selectedInvoice: {} });
  };

  snackbarClose = () => {
    this.setState({ snackbarOpen: false });
  };

  handleCancelInvoice = () => {
    // todo: cancel invoice
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
      case 'canceled':
        return theme.errorColor;
      default:
        return theme.textColor;
    }
  };

  render() {
    const { invoices } = this.props;
    const { anchorEl, snackbarOpen, snackbarMsg } = this.state;
    return (
      <MainContainer>
        <h2>Invoice Summary</h2>
        <button onClick={this.handleClick}>Test Action</button>
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
            {invoices.map(invoice => (
              <TableRow key={invoice.id}>
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
            ))}
          </TableBody>
        </Table>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          <MenuItem
            onClick={() => {
              this.handleSendReminder();
            }}
          >
            Send Reminder
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleCancelInvoice();
            }}
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
      </MainContainer>
    );
  }
}

const StatusLabel = styled.p`
  color: ${props => (props.color ? props.color : props.theme.textColor)};
`;

const MainContainer = styled.div`
  padding: 30px;
`;

const mapStateToProps = state => ({
  invoices: state.invoices,
  invoice: state.invoice,
});

export default connect(
  mapStateToProps,
  { submitInvoice, fetchInvoices },
)(Dashboard);
