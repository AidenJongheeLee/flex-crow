import React, { Component } from 'react';
import styled from 'styled-components';
import Stepper from '@material-ui/core/Stepper';
import { withStyles } from '@material-ui/core/styles';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import InvoiceForm from './InvoiceForm';

class CreateInvoiceContainer extends Component {
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
    const { activeStep } = this.state;
    const steps = ['General', 'Details', 'Send'];
    return (
      <MainContainer>
        <Stepper activeStep={activeStep}>
          {steps.map(step => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 && <InvoiceForm handleNext={this.handleNext} />}
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  padding: 30px;
`;

export default CreateInvoiceContainer;
