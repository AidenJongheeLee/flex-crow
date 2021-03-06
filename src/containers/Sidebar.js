/* eslint global-require: "off" */
import React, { Component } from 'react';
import styled from 'styled-components';
import Settings from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Receipt from '@material-ui/icons/Receipt';
import Schedule from '@material-ui/icons/Schedule';
import { changeTab } from '../actions';

class Sidebar extends Component {
  handleClick = (tabNumber) => {
    this.props.changeTab(tabNumber);
  };

  render() {
    return (
      <SidebarContainer className="side-nav">
        <TopIconContainer>
          <IconButton onClick={() => this.handleClick(1)}>
            <LogoIcon src={require('../images/flex-bill.png')} alt="logo" />
          </IconButton>

          <IconButton onClick={() => this.handleClick(2)}>
            <Receipt />
          </IconButton>

          <IconButton onClick={() => this.handleClick(4)}>
            <Schedule />
          </IconButton>
        </TopIconContainer>
        <BottomIcon>
          <IconButton>
            <Settings />
          </IconButton>
          <IconButton>
            <PowerSettingsNew />
          </IconButton>
        </BottomIcon>
      </SidebarContainer>
    );
  }
}

const TopIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const BottomIcon = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const SidebarContainer = styled.div`
  background-color: ${props => props.theme.successColor};
  height: 100%;
  width: 80px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Sidebar.propTypes = {
  changeTab: PropTypes.func.isRequired,
};

export default connect(
  null,
  { changeTab },
)(Sidebar);
