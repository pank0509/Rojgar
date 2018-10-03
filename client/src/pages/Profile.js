import React from 'react';
import { connect } from 'react-redux';
import Academic from '../component/Academic';
import Error from '../component/Error';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { phoneNumberValidation, validateRequired } from '../helper/adminComposeValidation';
import {
  getPreFillInfo,
  onChangeOfGrade,
  onChangeOfUserFName,
  onChangeOfUserLName,
  onChangeOfUserDate,
  onChangeOfUserEmail,
  onChangeOfUserGender,
  onChangeOfUserPhoneNumber,
  onChangeOfAlternateNumber,
  onChangeOfUserAddress,
  onChangeOfEducationQualification,
  onChangeSchool,
  onChangeFieldOfStudy,
  /* Job Detail function */
  onChangeOfJobType,
  onChangeOfExperience,
  onChangeOfAvgSalary,
  handleSubmit,

} from '../Redux/modules/profile';
import PersonalDetails from '../component/PersonalDetails';
import JobDetails from '../component/JobDetails';

function mapStateToProps(state) {
  return {
    profile: state.profile,
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPreFillInfo: (value) => dispatch(getPreFillInfo(value)),
    onChangeOfUserFName: (value) => dispatch(onChangeOfUserFName(value)),
    onChangeOfUserLName: (value) => dispatch(onChangeOfUserLName(value)),
    onChangeOfUserGender: (value) => dispatch(onChangeOfUserGender(value)),
    onChangeOfUserDate: (value) => dispatch(onChangeOfUserDate(value)),
    onChangeOfUserEmail: (value) => dispatch(onChangeOfUserEmail(value)),
    onChangeOfUserPhoneNumber: (value) => dispatch(onChangeOfUserPhoneNumber(value)),
    onChangeOfAlternateNumber: (value) => dispatch(onChangeOfAlternateNumber(value)),
    onChangeOfUserAddress: (value) => dispatch(onChangeOfUserAddress(value)),
    onChangeOfGrade: (value) => dispatch(onChangeOfGrade(value)),
    onChangeOfEducationQualification: (value) => dispatch(onChangeOfEducationQualification(value)),
    onChangeFieldOfStudy: (value) => dispatch(onChangeFieldOfStudy(value)),
    onChangeSchool: (value) => dispatch(onChangeSchool(value)),
    /* Job Detail function */
    onChangeOfJobType: (value) => dispatch(onChangeOfJobType(value)),
    onChangeOfExperience: (value) => dispatch(onChangeOfExperience(value)),
    onChangeOfAvgSalary: (value) => dispatch(onChangeOfAvgSalary(value)),
    handleSubmit: (value) => dispatch(handleSubmit(value)),
  };
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameNotValid: false,
      lastNameNotValid: false,
      phoneNotValid: false,
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.login.loginResponse !== nextProps.login.loginResponse) {
      this.props.getPreFillInfo(nextProps.login.loginResponse);
    }
  }
  handleSubmit = () => {
    this.props.handleSubmit(Object.assign(
      {}, this.props.profile.personalDetails, this.props.profile.academicDetails, this.props.profile.jobDetails
    ));
    this.props.history.push('/submit/message');
  }

  /* Validation function */
  handleFirstNameValidation = () => {
    if (validateRequired(this.props.profile.personalDetails.userFirstName)) {
      this.setState({
        firstNameNotValid: false,
      });
    } else {
      this.setState({
        firstNameNotValid: true,
      });
    }
  }
  handleLastNameValidation = () => {
    if (validateRequired(this.props.profile.personalDetails.userLastName)) {
      this.setState({
        lastNameNotValid: false,
      });
    } else {
      this.setState({
        lastNameNotValid: true,
      });
    }
  }
  handlePhoneNumberValidation = () => {
    if (phoneNumberValidation(this.props.profile.personalDetails.phoneNumber)) {
      this.setState({
        phoneNotValid: false,
      });
    } else {
      this.setState({
        phoneNotValid: true,
      });
    }
  }

  /* End Validation funnction */
  render() {
    console.log('this props in profile', this.state.firstNameNotValid);
    return (
      <div>
        {this.props.login.loginResponse && this.props.login.loginResponse.uaid ?
          <div className="margin-top-lg-100-xs-150">
            <div className="card">
              <div className="card-body">
                <i className="fa fa-times-circle-o font25" aria-hidden="true" />
              </div>
            </div>
            <PersonalDetails
              personalDetails={this.props.profile.personalDetails}
              onChangeOfUserFName={this.props.onChangeOfUserFName}
              onChangeOfUserLName={this.props.onChangeOfUserLName}
              onChangeOfUserGender={this.props.onChangeOfUserGender}
              onChangeOfUserDate={this.props.onChangeOfUserDate}
              onChangeOfUserEmail={this.props.onChangeOfUserEmail}
              onChangeOfUserPhoneNumber={this.props.onChangeOfUserPhoneNumber}
              onChangeOfAlternateNumber={this.props.onChangeOfAlternateNumber}
              onChangeOfUserAddress={this.props.onChangeOfUserAddress}
              handleFirstNameValidation={this.handleFirstNameValidation}
              handleLastNameValidation={this.handleLastNameValidation}
              handlePhoneNumberValidation={this.handleFirstNameValidation}
              firstNameNotValid={this.state.firstNameNotValid}
              lastNameNotValid={this.state.validateRequired}
              phoneNotValid={this.state.phoneNotValid}
            />
            <Academic
              academicDetails={this.props.profile.academicDetails}
              onChangeOfGrade={this.props.onChangeOfGrade}
              onChangeOfEducationQualification={this.props.onChangeOfEducationQualification}
              onChangeSchool={this.props.onChangeSchool}
              onChangeFieldOfStudy={this.props.onChangeFieldOfStudy}
            />
            <JobDetails
              jobDetails={this.props.profile.jobDetails}
              onChangeOfJobType={this.props.onChangeOfJobType}
              onChangeOfExperience={this.props.onChangeOfExperience}
              onChangeOfAvgSalary={this.props.onChangeOfAvgSalary}
            />
            <div className="margin-top-bottom-20 text-align-center">
              <button
                onClick={this.handleSubmit}
                disabled={this.state.phoneNotValid || this.state.firstNameNotValid || this.state.lastNameNotValid}
                className="submit-button-style font20 font-bold half-width"
              >
                <FormattedMessage
                  id="profile.submit.button"
                  defaultMessage="SUBMIT"
                />
              </button>
            </div>
          </div>
          :
          <div>
            <Error />
          </div>
        }
      </div>
    )
  }
}
Profile.propTypes = {
  onChangeOfUserFName: PropTypes.func,
  onChangeOfUserLName: PropTypes.func,
  onChangeOfUserGender: PropTypes.func,
  onChangeOfUserDate: PropTypes.func,
  onChangeOfUserEmail: PropTypes.func,
  onChangeOfUserPhoneNumber: PropTypes.func,
  onChangeOfAlternateNumber: PropTypes.func,
  onChangeOfUserAddress: PropTypes.func,
  onChangeOfGrade: PropTypes.func,
  onChangeOfEducationQualification: PropTypes.func,
  onChangeFieldOfStudy: PropTypes.func,
  onChangeSchool: PropTypes.func,
  onChangeOfJobType: PropTypes.func,
  onChangeOfExperience: PropTypes.func,
  onChangeOfAvgSalary: PropTypes.func,
  profile: PropTypes.object,
  login: PropTypes.object,
};
Profile.defaultProps = {
  onChangeOfUserFName: () => { },
  onChangeOfUserLName: () => { },
  onChangeOfUserGender: () => { },
  onChangeOfUserDate: () => { },
  onChangeOfUserEmail: () => { },
  onChangeOfUserPhoneNumber: () => { },
  onChangeOfAlternateNumber: () => { },
  onChangeOfUserAddress: () => { },
  onChangeOfGrade: () => { },
  onChangeOfEducationQualification: () => { },
  onChangeFieldOfStudy: () => { },
  onChangeSchool: () => { },
  onChangeOfJobType: () => { },
  onChangeOfExperience: () => { },
  onChangeOfAvgSalary: () => { },
  profile: {},
  login: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);