import React, { Component } from 'react';
import styled from 'styled-components';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import InvoiceForm from './InvoiceForm';
import DetailForm from './DetailForm';
import InvoiceSummary from './InvoiceSummary';

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
        {activeStep === 1 && (
          <DetailForm handleNext={this.handleNext} handleBack={this.handleBack} />
        )}
        {activeStep === 2 && <InvoiceSummary handleBack={this.handleBack} />}
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  padding: 30px;
`;

export default CreateInvoiceContainer;
