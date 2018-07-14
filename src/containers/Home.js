import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        SuccessFully Rendered Home
      </div>
    );
  }
};

const mapStatetoProps = state => {
  return {
    name: state.user.name
  }
};

export default connect(mapStatetoProps, {})(Home);