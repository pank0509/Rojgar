import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from "react-redux";
import './NavigationHeader.css';
import Login from './Login';
import PropTypes from 'prop-types';
import { addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_hi from 'react-intl/locale-data/hi';
import { IntlProvider } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Register from './Register';
import {
  logoutUserRequest
} from "../Redux/modules/login";
import { FormattedMessage } from 'react-intl';
import { onLanguageChange } from '../Redux/modules/language';

const languages = {
  en: 'en.json',
  hi: 'hi.json'
};

function mapStateToProps(state) {
  return {
    login: state.login,
    profile: state.profile,
    language: state.language,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    logoutUserRequest: () => dispatch(logoutUserRequest()),
    onLanguageChange: (value) => dispatch(onLanguageChange(value))
  };
}
addLocaleData([...locale_en, ...locale_hi]);
class NavigationHeader extends React.Component {
  state = {
    loginModal: false,
    intlResourcesLoaded: false,
    registerModal: false,
  }
  componentDidMount() {
    const languageKeys = Object.keys(languages);
    languageKeys.map((languageKey, index) => {
      fetch(`${process.env.PUBLIC_URL}/${languages[languageKey]}`, {
        credentials: 'same-origin',
      })
        .then(resp => resp.json())
        .then((json) => {
          this.setState({
            [languageKey]: json,
            intlResourcesLoaded: index === languageKeys.length - 1,
          });
        })
        .catch((error) => {
          console.log(
            `There has been a problem with your fetch operation:${error.message}`,
          );
        });
    });
  }
  handleLoginClick = () => {
    this.setState({
      loginModal: true,
    });
  }
  closeLoginModel = () => {
    this.setState({
      loginModal: false,
    });
  }
  handleRegistration = () => {
    this.setState({
      registerModal: true,
    });
  }
  closeRegisterModel = () => {
    this.setState({
      registerModal: false,
    });
  }
  handleViewEditProfile = () => {
    this.props.history.push('/profile');
  }
  handleLogoutClick = () => {
    this.setState({
      loginModal: false,
    });
    this.props.logoutUserRequest();
  }
  handleLanguageChange = (event) => {
    this.props.onLanguageChange(event.target.value);
  };
  handleRojgarClicked = () => {
    this.props.history.push('/');
  }
  render() {
    const loginResponse = this.props.login.loginResponse && this.props.login.loginResponse.uaid;
    const messages = this.state;
    const language = this.props.language.lang || 'en';
    console.log('Location props', this.props.location);
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <div>
          <nav className="navbar navbar-default navbar-fixed-top background-color-white">
            <div className="container-fluid max-width">
              <div
                className="navbar-header"
              >
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                {/* <a className="navbar-brand" onClick={this.handleRojgarClicked} className="font40 margin-left-10">रोजगार</a> */}
              </div>
              <div class="collapse navbar-collapse" id="myNavbar">
                <div className="nav navbar-nav font20 margin-top-10">
                  <span className="margin-left-10">
                    <FormattedMessage
                      id="navigation.language.selection"
                      defaultMessage="Please Select your language"
                    />
                  </span>
                  <span className="margin-left-10">
                    <select
                      onChange={this.handleLanguageChange}
                    >
                      <option label="हिंदी">
                        hi
                      </option>
                      <option label="English">
                        en
                      </option>
                    </select>
                  </span>
                </div>
                {!loginResponse
                  ?
                  <div className="nav navbar-nav navbar-right">
                    <button
                      onClick={this.handleLoginClick}
                      className="login-register-button border-none font-color-white border-curved padding-10 bold font18 margin-10"
                    >
                      <FormattedMessage
                        id="navigation.login.button"
                        defaultMessage="LOGIN"
                      />
                    </button>
                    <button
                      onClick={this.handleRegistration}
                      className="login-register-button border-none font-color-white border-curved padding-10 bold font18 margin-10"
                    >
                      <FormattedMessage
                        id="navigation.newuser.button"
                        defaultMessage="NEW USER"
                      />
                    </button>
                  </div>
                  :
                  <div className="nav navbar-nav navbar-right" id="myNavbar">
                    {this.props.location.pathname === '/job' ?
                      <button
                        onClick={this.handleViewEditProfile}
                        className="login-register-button border-none font-color-white border-curved padding-10 bold font18 margin-10"
                      >
                        <FormattedMessage
                          id="navigation.edit.button"
                          defaultMessage="VIEW / EDIT PROFILE"
                        />
                      </button>
                      :
                      ''
                    }
                    <button
                      onClick={this.handleLogoutClick}
                      className="login-register-button border-none font-color-white border-curved padding-10 bold font18 margin-10"
                    >
                      <FormattedMessage
                        id="navigation.logout.button"
                        defaultMessage="Logout"
                      />
                    </button>
                  </div>
                }
              </div>
            </div>
          </nav>
          <Modal
            show={this.state.loginModal && !loginResponse}
            aria-labelledby="contained-modal-title-sm"
          >
            <Modal.Header>
              <img onClick={this.closeLoginModel} src={`${process.env.PUBLIC_URL}/svgIcons/close.png`} width="15" height="15" alt="" className="float-right" />
            </Modal.Header>
            <Modal.Body>
              <Login
                userFirstName={this.props.profile.personalDetails.userFirstName}
                userLastName={this.props.profile.personalDetails.userLastName}
                phoneNumber={this.props.profile.personalDetails.phoneNumber}
              />
            </Modal.Body>
          </Modal>
          <Modal
            show={this.state.registerModal && !loginResponse}
            aria-labelledby="contained-modal-title-sm"
          >
            <Modal.Header>
              <img onClick={this.closeRegisterModel} src={`${process.env.PUBLIC_URL}/svgIcons/close.png`} width="15" height="15" alt="" className="float-right" />
            </Modal.Header>
            <Modal.Body>
              <Register />
            </Modal.Body>
          </Modal>
          {this.props.children}
        </div>
      </IntlProvider >
    )
  }
}
NavigationHeader.propTypes = {
  language: PropTypes.object,
  profile: PropTypes.object,
}
NavigationHeader.defaultProps = {
  language: {},
  profile: {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(NavigationHeader));