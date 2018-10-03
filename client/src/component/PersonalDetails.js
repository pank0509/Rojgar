import React from 'react';
import Dropdown from './Dropdown';
import DatePicker from 'react-datepicker';
import { Row, Col } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import $ from "jquery";
import { FormattedMessage } from 'react-intl';

const genderOption = [{ value: 'male', label: 'नर' }, { value: 'female', label: 'महिला' }, { value: 'other', label: 'Other' }];

class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addIconClicked: false,
    }
  }
  handleIconClicked = () => {
    $('#persoanalDetailPanel').slideToggle(1000);
    this.setState({
      addIconClicked: !this.state.addIconClicked,
    });
  }
  handleUserFirstName = (event) => {
    this.props.onChangeOfUserFName(event.target.value)
  }
  handleUserLastName = (event) => {
    this.props.onChangeOfUserLName(event.target.value)
  }
  handleGenderChange = (event) => {
    this.props.onChangeOfUserGender(event.target.value);
  }
  handleDateChange = (date) => {
    this.props.onChangeOfUserDate(date);
  }
  handleUserEmail = (event) => {
    this.props.onChangeOfUserEmail(event.target.value);
  }
  handlePhoneNumber = (event) => {
    this.props.onChangeOfUserPhoneNumber(event.target.value);
  }
  handleUserAlterNumber = (event) => {
    this.props.onChangeOfAlternateNumber(event.target.value);
  }
  handleUserAddress = (event) => {
    this.props.onChangeOfUserAddress(event.target.value);
  }
  render() {
    const { userFirstName, userLastName, gender, email, date, phoneNumber, alternatePhoneNumber, address } = this.props.personalDetails;
    return (
      <div className="padding-top-bottom-10 margin-top-bottom-10 background-color-white">
        <div className="display-flex-align-item-center" onClick={this.handleIconClicked}>
          <div className="margin-left-20 width-35">
            {this.state.addIconClicked ?
              <img src={`${process.env.PUBLIC_URL}/svgIcons/error.svg`} width="100%" height="auto" alt="" /> :
              <img src={`${process.env.PUBLIC_URL}/svgIcons/checked.svg`} width="100%" height="auto" alt="" />
            }
          </div>
          <div className="theme-font-color font-bold font18 margin-left-10">
            <FormattedMessage
              id="profile.personaldetail"
              defaultMessage="PERSONAL DETAILS"
            />
          </div>
        </div>
        <div id='persoanalDetailPanel' className="margin-20">
          <div className="margin-top-bottom-20">
            <div className="font16">
              <FormattedMessage
                id="profile.firstname"
                defaultMessage="Fisrt Name"
              />
            </div>
            <input
              type="text"
              className={this.props.firstNameNotValid
                ?
                'form-control margin-top-bottom-20'
                :
                'form-control margin-top-bottom-20 border-red'
              }
              value={userFirstName}
              onBlur={this.props.handleFirstNameValidation}
              onChange={this.handleUserFirstName}
            />
            <div className="margin-bottom-20 red">
              {this.props.firstNameNotValid ?
                <FormattedMessage
                  id="validation.in.profile.firstname"
                  defaultMessage="User First Name Cannot be empty"
                />
                : ''}
            </div>
            <div className="font16">
              <FormattedMessage
                id="profile.lastname"
                defaultMessage="Last Name"
              />
            </div>
            <input
              type="text"
              className={this.props.lastNameNotValid
                ?
                'form-control margin-top-bottom-20'
                :
                'form-control margin-top-bottom-20 border-red'
              }
              value={userLastName}
              onBlur={this.props.handleLastNameValidation}
              onChange={this.handleUserLastName}
            />
          </div>
          <div className="margin-bottom-20 red">
            {this.props.lastNameNotValid ?
              <FormattedMessage
                id="validation.in.profile.lastname"
                defaultMessage="User Last Name Cannot be empty"
              />
              : ''}
          </div>
          <Row className="margin-top-bottom-20">
            <Col lg={6} md={6} sm={6} xs={12}>
              <div className="font16">
                <FormattedMessage
                  id="profile.gender"
                  defaultMessage="Select Gender"
                />
              </div>
              <Dropdown
                onChange={this.handleGenderChange}
                options={genderOption}
                isMulti={false}
                value={gender}
              />
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <div className="font16">
                <FormattedMessage
                  id="profile.dateofbirth"
                  defaultMessage="Date of birth"
                />
              </div>
              <DatePicker
                id="startDatepicker"
                className="form-control"
                dateFormat="DD/MM/YYYY"
                selected={!!date ? date : moment()}
                onChange={this.handleDateChange}
                dropdownMode="select"
                maxDate={moment()}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                popoverTargetOffset="8px 0px"
              />
            </Col>
          </Row>
          <div>
            <div className="font16">
              <FormattedMessage
                id="profile.email"
                defaultMessage="Email"
              />
            </div>
            <input
              type="email"
              value={email}
              className="form-control"
              onChange={this.handleUserEmail}
            />
          </div>
          <Row className="margin-top-bottom-20">
            <Col lg={6} md={6} sm={6} xs={12}>
              <div className="font16">
                <FormattedMessage
                  id="profile.number"
                  defaultMessage="Phone Number"
                />
              </div>
              <input
                type="number"
                value={phoneNumber}
                onBlur={this.props.handlePhoneNumberValidation}
                className={this.props.phoneNotValid
                  ?
                  'form-control margin-top-bottom-20'
                  :
                  'form-control margin-top-bottom-20 border-red'
                }
                onChange={this.handlePhoneNumber}
              />
              <div className="margin-bottom-20 red">
                {this.props.phoneNotValid ?
                  <FormattedMessage
                    id="validation.in.profile.firstname"
                    defaultMessage="User Phone Number Cannot be empty"
                  />
                  : ''}
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <div className="font16">
                <FormattedMessage
                  id="profile.alternatenumber"
                  defaultMessage="Alternate Number (optional)"
                />
              </div>
              <input
                type="number"
                value={alternatePhoneNumber}
                className="form-control"
                onChange={this.handleUserAlterNumber}
              />
            </Col>
          </Row>
          <div className="margin-top-bottom-20 full-width">
            <div className="font16">
              <FormattedMessage
                id="profile.address"
                defaultMessage="Please Enter your Address"
              />
            </div>
            <textarea
              rows="5"
              className="full-width form-control"
              onChange={this.handleUserAddress}
              value={address}
              required
            />
          </div>
        </div>
      </div>
    )
  }
}
PersonalDetails.propTypes = {
  onChangeOfUserFName: PropTypes.func,
  onChangeOfUserLName: PropTypes.func,
  onChangeOfUserGender: PropTypes.func,
  onChangeOfUserDate: PropTypes.func,
  onChangeOfUserEmail: PropTypes.func,
  onChangeOfUserPhoneNumber: PropTypes.func,
  onChangeOfAlternateNumber: PropTypes.func,
  onChangeOfUserAddress: PropTypes.func,
  personalDetails: PropTypes.object,
  handleFirstNameValidation: PropTypes.func,
  handleLastNameValidation: PropTypes.func,
  handleEmailValidation: PropTypes.func,
  handlePhoneNumberValidation: PropTypes.func,
  firstNameNotValid: PropTypes.bool,
  lastNameNotValid: PropTypes.bool,
  phoneNotValid: PropTypes.bool,
};
PersonalDetails.defaultProps = {
  onChangeOfUserFName: () => { },
  onChangeOfUserLName: () => { },
  onChangeOfUserGender: () => { },
  onChangeOfUserDate: () => { },
  onChangeOfUserEmail: () => { },
  onChangeOfUserPhoneNumber: () => { },
  onChangeOfAlternateNumber: () => { },
  onChangeOfUserAddress: () => { },
  personalDetails: {},
  handleFirstNameValidation: () => { },
  handleLastNameValidation: () => { },
  handleEmailValidation: () => { },
  handlePhoneNumberValidation: () => { },
  firstNameNotValid: () => { },
  lastNameNotValid: () => { },
  phoneNotValid: () => { },
};
export default PersonalDetails;