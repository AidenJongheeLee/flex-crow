import React, { Component } from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import { withStyles } from '@material-ui/core/styles';
import StepLabel from '@material-ui/core/StepLabel';
import { theme } from '../styles/Theme';
import InvoiceForm from './InvoiceForm';
import DetailForm from './DetailForm';
import InvoiceSummary from './InvoiceSummary';

class CreateInvoiceContainer extends Component {
  static propTypes = {
    classes: object.isRequired,
  };

  state = {
    activeStep: 0,
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep + 1 });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep - 1 });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const steps = ['General', 'Details', 'Send'];

    return (
      <MainContainer>
        <HeaderText>Create New Invoice</HeaderText>
        <Stepper classes={{ root: classes.stepper }} activeStep={activeStep}>
          {steps.map(step => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 && <InvoiceForm handleNext={this.handleNext} />}
        {activeStep === 1 && (
          <DetailForm handleNext={this.handleNext} handleBack={this.handleBack} />
        )}
        {activeStep === 2 && <InvoiceSummary handleBack={this.handleBack} />}
      </MainContainer>
    );
  }
}

const styles = {
  stepper: {
    width: '80%',
    margin: 'auto',
    backgroundColor: theme.backgroundColor,
  },
  stepperIcon: {
    color: `${theme.primaryColor} !important`,
  },
};

const HeaderText = styled.h2`
  width: 80%;
  margin: auto;
`;

const MainContainer = styled.div`
  padding: 30px;
  background-color: ${props => props.theme.backgroundColor};
  height: 100%;
`;

export default withStyles(styles)(CreateInvoiceContainer);
