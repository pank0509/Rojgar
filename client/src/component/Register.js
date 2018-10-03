import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { onChangeOfRegFName, onChangeOfRegLName, onChangeOfUserType, onChangeOfRegPhoneNumber, onChangeOfPassword, registerNewUser } from '../Redux/modules/register';

function mapStateToProps(state) {
  return {
    register: state.register,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onChangeOfRegFName: (value) => dispatch(onChangeOfRegFName(value)),
    onChangeOfRegLName: (value) => dispatch(onChangeOfRegLName(value)),
    onChangeOfUserType: (value) => dispatch(onChangeOfUserType(value)),
    onChangeOfRegPhoneNumber: (value) => dispatch(onChangeOfRegPhoneNumber(value)),
    oChangeOfPassword: (value) => dispatch(onChangeOfPassword(value)),
    registerNewUser: (value) => dispatch(registerNewUser(value)),
  }
}

class Register extends React.Component {
  state = {
    changeButton: false,
  }
  handleRegistrationButton = () => {
    this.props.registerNewUser(this.props.register.register);
    this.setState({
      changeButton: true,
    })
  }
  handleRegFName = (event) => {
    this.props.onChangeOfRegFName(event.target.value);
  }
  handleRegLName = (event) => {
    this.props.onChangeOfRegLName(event.target.value);
  }
  handleRegPhoneNumber = (event) => {
    this.props.onChangeOfRegPhoneNumber(event.target.value);
  }
  handlePassword = (event) => {
    this.props.oChangeOfPassword(event.target.value);
  }
  handleUserType = (event) => {
    this.props.onChangeOfUserType(event.target.value);
  }
  render() {
    const { firstName, lastName, phoneNumber, password, userType } = this.props.register.register;
    return (
      <div>
        <div className="display-flex-justify-content-space-between">
          <label className="font18">
            <input
              type="radio"
              className="margin-right-10 font18"
              onChange={this.handleUserType}
              value="seeker"
              checked={userType === 'seeker'}
            />
            <FormattedMessage
              id="login.jobseeker"
              defaultMessage="JOB SEEKER"
            />
          </label>
          <label className="font18">
            <input
              type="radio"
              className="margin-right-10"
              onChange={this.handleUserType}
              value="provider"
              checked={userType === 'provider'}
            />
            <FormattedMessage
              id="login.jobprovider"
              defaultMessage="JOB SEEKER"
            />
          </label>
        </div>
        <div className="font18">
          <FormattedMessage
            id="register.firstname"
            defaultMessage="First Name"
          />
        </div>
        <input
          type="text"
          value={firstName}
          className="form-control margin-top-bottom-10"
          onChange={this.handleRegFName}
        />
        <div className="font18">
          <FormattedMessage
            id="register.lastname"
            defaultMessage="Last Name"
          />
        </div>
        <input
          type="text"
          value={lastName}
          className="form-control margin-top-bottom-10"
          onChange={this.handleRegLName}
        />
        <div className="font18">
          <FormattedMessage
            id="register.phonenumber"
            defaultMessage="Phone Number"
          />
        </div>
        <input
          type="number"
          value={phoneNumber}
          className="form-control margin-top-bottom-10"
          onChange={this.handleRegPhoneNumber}
        />
        <div className="font18">
          <FormattedMessage
            id="register.password"
            defaultMessage="Password"
          />
        </div>
        <input
          type="password"
          value={password}
          className="form-control margin-top-bottom-10"
          onChange={this.handlePassword}
        />
        <div className="text-align-right">
          <button
            type="button"
            className={this.state.changeButton ? 'submit-button-style padding-20' : 'login-registration-button-before-click padding-20'}
            onClick={this.handleRegistrationButton}
          >
            <FormattedMessage
              id="login.jobseeker"
              defaultMessage="REGISTER"
            />
          </button>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  onChangeOfUserType: PropTypes.func,
  onChangeOfRegFName: PropTypes.func,
  onChangeOfRegLName: PropTypes.func,
  onChangeOfRegPhoneNumber: PropTypes.func,
  oChangeOfPassword: PropTypes.func,
  registerNewUser: PropTypes.func,
  register: PropTypes.object,
}
Register.defaultProps = {
  onChangeOfUserType: () => { },
  onChangeOfRegFName: () => { },
  onChangeOfRegLName: () => { },
  onChangeOfRegPhoneNumber: () => { },
  oChangeOfPassword: () => { },
  registerNewUser: () => { },
  register: {},
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);