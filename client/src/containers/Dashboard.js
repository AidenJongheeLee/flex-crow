import React, { Component } from 'react';
import { connect } from 'react-redux';
class Dashboard extends Component {
  render() {
    return (
      <div>
        SuccessFully Rendered Dashboard
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
});


export default connect(mapStateToProps, {})(Dashboard);
