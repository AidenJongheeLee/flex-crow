import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { object, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { TextField, InputAdornment } from '@material-ui/core';
import { submitInvoice } from '../actions';

class InvoiceSummary extends Component {
  static propTypes = {
    invoice: object.isRequired,
    classes: object.isRequired,
    submitInvoice: func.isRequired,
    user: object.isRequired,
    dashboard: bool.isRequired,
  };

  handleClick = () => {
    this.props.submitInvoice(this.props.invoice);
  };

  render() {
    const { invoice, classes, user, dashboard } = this.props;
    return (
      <div>
        <InvoiceHeader>Invoice#</InvoiceHeader>
        <TopContainer>
          <TextLabel>From</TextLabel>
          <TextLabel last>To</TextLabel>
        </TopContainer>
        <TopContainer>
          <TextField className={classes.spacingTop} fullWidth disabled value={user.name || ''} />
          <TextField
            fullWidth
            className={classes.spacingLeft}
            disabled
            value={invoice.sender_name || ''}
          />
        </TopContainer>
        <TopContainer>
          <TextField className={classes.spacingTop} fullWidth disabled value={user.email || ''} />
          <TextField
            fullWidth
            className={classes.spacingLeft}
            disabled
            value={invoice.to_email || ''}
          />
        </TopContainer>

        {dashboard && (
          <TopContainer>
            <TextField
              label="Created at"
              disabled
              className={classes.spacingTop}
              fullWidth
              value={moment(invoice.created_at).format('MMM Do') || ''}
            />

            <TextField
              label="Due Date"
              disabled
              className={classes.spacingLeft}
              fullWidth
              value="Aug 14th"
            />
          </TopContainer>
        )}

        <TextField
          className={classes.spacingTop}
          fullWidth
          disabled
          label="Project Name"
          value={invoice.project_name || ''}
        />
        <TextField
          className={classes.spacingTop}
          fullWidth
          disabled
          label="Service Detail"
          value={invoice.description || ''}
        />
        <TextField
          className={classes.spacingTop}
          fullWidth
          disabled
          label="Billing Frequency"
          value={invoice.invoice_type || ''}
        />
        <TextField
          className={classes.spacingTop}
          disabled
          label="Total cost"
          value={invoice.total_cost || ''}
          InputProps={{
            endAdornment: <InputAdornment>ETH </InputAdornment>,
          }}
        />
      </div>
    );
  }
}

const styles = {
  spacingLeft: {
    marginLeft: '48pt',
    marginTop: '10pt',
  },
  spacingTop: {
    marginTop: '10pt',
  },
  buttons: {
    marginLeft: '10pt',
    width: '150px',
  },
};

const TextLabel = styled.p`
  font-size: 1rem;
  flex: 1;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 0px;
  margin-left: ${props => (props.last ? '48pt' : '0pt')};
`;

const TopContainer = styled.div`
  display: flex;
`;

const InvoiceHeader = styled.h4``;

const mapStateToProps = state => ({
  user: state.user,
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { submitInvoice },
  )(InvoiceSummary),
);
