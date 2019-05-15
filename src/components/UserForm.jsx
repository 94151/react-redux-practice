import React, { Component} from 'react';
import { connect } from 'react-redux';

import { userAction } from '../actions';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:  event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName} = this.state;
    const { updateUserData } = this.props;
    const obj = {id: Math.random(), firstName, lastName}
    updateUserData(obj);
  }

  resetData = (event) => {
    event.preventDefault();
    const { resetuser } = this.props;
    resetuser();
  }

  render() {
    const { firstName, lastName } = this.state;

    return (
      <form>
        First name:<br />
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <br />
        Last name:<br />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <br /><br />
        <button onClick={this.handleSubmit}> Submit </button>
        <button onClick={this.resetData}> RESET </button>
      </form> 
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserData: (obj) => dispatch(userAction.updateUser(obj)),
    resetuser: () => dispatch(userAction.resetUser()),
  }
}

export default connect(null, mapDispatchToProps)(UserForm);