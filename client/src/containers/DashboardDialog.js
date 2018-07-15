import React, { Component } from 'react';
import { bool, func, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Dialog } from '@material-ui/core';
import SummaryForm from './SummaryForm';

class DashboardDialog extends Component {
  static propTypes = {
    open: bool.isRequired,
    onClose: func.isRequired,
    selectedInvoice: object.isRequired,
    classes: object.isRequired,
  };

  render() {
    const { open, onClose, selectedInvoice, classes } = this.props;
    return (
      <Dialog classes={{ paper: classes.dialog }} open={open} onClose={onClose}>
        <SummaryForm invoice={selectedInvoice} />
      </Dialog>
    );
  }
}

const styles = {
  dialog: {
    padding: '10px 26pt 26pt 26pt',
  },
};

export default withStyles(styles)(DashboardDialog);
