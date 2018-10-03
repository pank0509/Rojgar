import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router'
import {
  onChangeOfPhoneNumber,
  onChangeOfPassword,
  onLoginTypeChange,
  loginUserRequest,
  logoutUserRequest
} from "../Redux/modules/login";

function mapStateToProps(state) {
  return {
    login: state.login,
    profile: state.profile
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onChangeOfPhoneNumber: value => dispatch(onChangeOfPhoneNumber(value)),
    onChangeOfPassword: value => dispatch(onChangeOfPassword(value)),
    onLoginTypeChange: value => dispatch(onLoginTypeChange(value)),
    loginUserRequest: value => dispatch(loginUserRequest(value)),
    logoutUserRequest: () => dispatch(logoutUserRequest())
  };
}

class Login extends React.Component {
  handleLoginButton = () => {
    this.props.loginUserRequest(this.props.login);
    this.changeRoute();
  };
  handleLogoutButton = () => {
    this.props.logoutUserRequest();
  }
  changeRoute = () => {
    const { userFirstName, userLastName, phoneNumber } = this.props.profile.personalDetails;
    if (this.props.login.loginType === 'seeker') {
      if (userFirstName && userLastName && phoneNumber) {
        this.props.history.push('/job');
      } else {
        this.props.history.push('/profile');
      }
    } else {
      this.props.history.push('/postjob');
    }
  }
  handlePhoneNumber = event => {
    this.props.onChangeOfPhoneNumber(event.target.value);
  };
  handleLoginPassword = event => {
    this.props.onChangeOfPassword(event.target.value);
  };
  handleLoginType = (event) => {
    this.props.onLoginTypeChange(event.target.value);
  }
  render() {
    const { phoneNumber, password } = this.props.login;
    return (
      <div>
        <div className="display-flex-justify-content-space-between">
          <label className="font18">
            <input
              type="radio"
              className="margin-right-10 font18"
              onChange={this.handleLoginType}
              value="seeker"
              checked={this.props.login.loginType === 'seeker'}
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
              onChange={this.handleLoginType}
              value="provider"
              checked={this.props.login.loginType === 'provider'}
            />
            <FormattedMessage
              id="login.jobprovider"
              defaultMessage="JOB SEEKER"
            />
          </label>
        </div>
        <div className="margin-top-10 font16">
          <FormattedMessage
            id="login.phonenumber"
            defaultMessage="Phone Number"
          />
        </div>
        <input
          type="text"
          value={phoneNumber}
          required
          className="form-control margin-top-bottom-10"
          onChange={this.handlePhoneNumber}
        />
        <div className="font16">
          <FormattedMessage
            id="login.password"
            defaultMessage="Password"
          />
        </div>
        <input
          type="text"
          value={password}
          required
          className="form-control margin-top-bottom-10"
          onChange={this.handleLoginPassword}
        />
        <div className="text-align-right font18">
          <button
            type="button"
            className="login-registration-button-before-click padding-left-right-20 font-bold"
            onClick={() => this.handleLoginButton(this.props.login)}
          >
            <FormattedMessage
              id="login.login.button"
              defaultMessage="LOGIN"
            />
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onChangeOfPhoneNumber: PropTypes.func,
  onLoginTypeChange: PropTypes.func,
  onChangeOfPassword: PropTypes.func,
  loginUserRequest: PropTypes.func,
  logoutUserRequest: PropTypes.func,
  history: PropTypes.object,
  login: PropTypes.object,
  userFirstName: PropTypes.string,
  userLastName: PropTypes.string,
  phonenumber: PropTypes.string,
  profile: PropTypes.object
};
Login.defaultProps = {
  onChangeOfPhoneNumber: () => { },
  onLoginTypeChange: () => { },
  onChangeOfPassword: () => { },
  loginUserRequest: () => { },
  logoutUserRequest: () => { },
  history: {},
  userFirstName: null,
  userLastName: null,
  phonenumber: null,
  login: {},
  profile: {}
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
