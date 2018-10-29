import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router'
import { phoneNumberValidation } from '../helper/adminComposeValidation';

import {
  onChangeOfContactPersonName,
  onChangeOfCompanyName,
  onChangeOfJobTitle,
  onChangeOfVacancy,
  onChangeOfJobDescription,
  onChangeOfMinSalary,
  onChangeOfMaxSalary,
  onChangeOfCity,
  onChangeOfLocality,
  onChangeOfExperience,
  onChangeOfEmail,
  onChangeOfPhoneNumber,
  postAJobRequest
} from '../Redux/modules/postAJob';
// import Error from './Error';
function mapStateToProps(state) {
  return {
    postAJob: state.postAJob,
    login: state.login,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onChangeOfContactPersonName: (value) => dispatch(onChangeOfContactPersonName(value)),
    onChangeOfCompanyName: (value) => dispatch(onChangeOfCompanyName(value)),
    onChangeOfJobTitle: (value) => dispatch(onChangeOfJobTitle(value)),
    onChangeOfVacancy: (value) => dispatch(onChangeOfVacancy(value)),
    onChangeOfJobDescription: (value) => dispatch(onChangeOfJobDescription(value)),
    onChangeOfMinSalary: (value) => dispatch(onChangeOfMinSalary(value)),
    onChangeOfMaxSalary: (value) => dispatch(onChangeOfMaxSalary(value)),
    onChangeOfCity: (value) => dispatch(onChangeOfCity(value)),
    onChangeOfLocality: (value) => dispatch(onChangeOfLocality(value)),
    onChangeOfExperience: (value) => dispatch(onChangeOfExperience(value)),
    onChangeOfEmail: (value) => dispatch(onChangeOfEmail(value)),
    onChangeOfPhoneNumber: (value) => dispatch(onChangeOfPhoneNumber(value)),
    postAJobRequest: (value) => dispatch(postAJobRequest(value))
  }
}

class PostAJob extends React.Component {
  state = {
    phoneNumberValid: false,
    jobPostSuccess: false,
  }
  handlePostJob = () => {
    this.props.postAJobRequest(Object.assign({}, this.props.postAJob, this.props.login.loginResponse));
    this.props.history.push('/submit/afterjobpost');
  }
  handleContactPersonName = (event) => {
    this.props.onChangeOfContactPersonName(event.target.value);
  }
  handleCompanyName = (event) => {
    this.props.onChangeOfCompanyName(event.target.value);
  }
  handleJobTitle = (event) => {
    this.props.onChangeOfJobTitle(event.target.value);
  }
  handleNumberOfVacancy = (event) => {
    this.props.onChangeOfVacancy(event.target.value);
  }
  handleJobDescription = (event) => {
    this.props.onChangeOfJobDescription(event.target.value);
  }
  handleMinSalary = (event) => {
    this.props.onChangeOfMinSalary(event.target.value);
  }
  handleMaxSalary = (event) => {
    this.props.onChangeOfMaxSalary(event.target.value);
  }
  handleCity = (event) => {
    this.props.onChangeOfCity(event.target.value);
  }
  handleLocality = (event) => {
    this.props.onChangeOfLocality(event.target.value);
  }
  handleExperience = (event) => {
    this.props.onChangeOfExperience(event.target.value);
  }
  handleEmail = (event) => {
    this.props.onChangeOfEmail(event.target.value);
  }
  handlePhoneNumber = (event) => {
    this.props.onChangeOfPhoneNumber(event.target.value);
  }
  /* Validation function */
  handlePhoneNumberValidation = () => {
    if (phoneNumberValidation(this.props.postAJob.phoneNumber)) {
      console.log('This is a valid phone number');
      this.setState({
        phoneNumberValid: true,
      });
    } else {
      console.log('This is a not valid phone number');
      this.setState({
        phoneNumberValid: false,
      });
    }
  }
  /* Validation end */
  render() {
    const { contactPersonName,
      companyName,
      jobTitle,
      vacancy,
      jobDescription,
      minSalary,
      maxSalary,
      city,
      locality,
      experience,
      email,
      phoneNumber
    } = this.props.postAJob;
    return (
      <div>
        {/* {this.props.login.loginResponse && this.props.login.loginResponse.uaid ? */}
        <div className="margin-top-lg-100-xs-150">
          <div className="margin-left-20 font24">
            <FormattedMessage
              id="post.contactperson"
              defaultMessage="Contact Person name"
            />
          </div>
          <div className="margin-20">
            <input
              type="text"
              value={contactPersonName ? contactPersonName : ''}
              className={this.state.contactPersonNotValid
                ?
                'form-control margin-top-bottom-20'
                :
                'form-control margin-top-bottom-20 border-red'
              }
              onChange={this.handleContactPersonName}
            />
            <div className="margin-bottom-20 red">
              {this.state.contactPersonNotValid ? 'Please provide a contact person name' : ''}
            </div>
          </div>
          <div className="margin-left-20 font24">
            <FormattedMessage
              id="post.companyname"
              defaultMessage="Company Name"
            />
          </div>
          <div className="margin-20">
            <input
              type="text"
              value={companyName ? companyName : ''}
              className="form-control padding-top-bottom-20"
              onChange={this.handleCompanyName}
            />
          </div>
          <div className="margin-left-20 font24">
            <FormattedMessage
              id="post.jobtitle"
              defaultMessage="Job Title"
            />
          </div>
          <div className="margin-20">
            <input
              type="text"
              value={jobTitle ? jobTitle : ''}
              className="form-control padding-top-bottom-20"
              onChange={this.handleJobTitle}
            />
          </div>
          <div className="margin-left-20 font24">
            <FormattedMessage
              id="post.vacancy"
              defaultMessage="Number of vacancy"
            />
          </div>
          <div className="margin-20">
            <input
              type="text"
              value={vacancy ? vacancy : ''}
              className="form-control padding-top-bottom-20"
              onChange={this.handleNumberOfVacancy}
            />
          </div>
          <div className="margin-left-20 font24">
            <FormattedMessage
              id="post.jobdescription"
              defaultMessage="Please give job description"
            />
          </div>
          <div className="margin-20">
            <textarea
              rows="5"
              className={this.state.jobDescription
                ?
                'full-width form-control padding-top-bottom-10'
                :
                'full-width form-control padding-top-bottom-10 border-red'
              }
              onChange={this.handleJobDescription}
              value={jobDescription}
              required
            />
            <div className="margin-bottom-20">
              {this.state.jobDescription ? 'Please enter the job description' : ''}
            </div>
          </div>
          <Row className="margin-20">
            <Col lg={6} md={6} sm={6} xs={12} className="padding-left-right-0">
              <div className="font24">
                <FormattedMessage
                  id="post.jobminsalary"
                  defaultMessage="Min Salary"
                />
              </div>
              <input
                type="number"
                value={minSalary ? minSalary : ''}
                className="form-control padding-top-bottom-20"
                onChange={this.handleMinSalary}
              />
            </Col>
            <Col lg={6} md={6} sm={6} xs={12} className="padding-left-right-0">
              <div className="font24">
                <FormattedMessage
                  id="post.jobmaxsalary"
                  defaultMessage="Max Salary"
                />
              </div>
              <input
                type="number"
                value={maxSalary}
                className="form-control padding-top-bottom-20"
                onChange={this.handleMaxSalary}
              />
            </Col>
          </Row>
          <Row className="margin-20">
            <Col lg={4} md={4} sm={6} xs={6} className="no-padding">
              <div className="font24">
                <FormattedMessage
                  id="post.jobcity"
                  defaultMessage="City"
                />
              </div>
              <input
                type="text"
                value={city}
                className="form-control padding-top-bottom-20"
                onChange={this.handleCity}
              />
            </Col>
            <Col lg={4} md={4} sm={6} xs={6}>
              <div className="font24">
                <FormattedMessage
                  id="post.joblocality"
                  defaultMessage="Locality"
                />
              </div>
              <input
                type="text"
                value={locality}
                className="form-control padding-top-bottom-20"
                onChange={this.handleLocality}
              />
            </Col>
            <Col lg={4} md={4} sm={6} xs={12} className="no-padding">
              <div className="font24">
                <FormattedMessage
                  id="post.jobexperience"
                  defaultMessage="Experience"
                />
              </div>
              <input
                type="text"
                value={experience}
                className="form-control padding-top-bottom-20"
                onChange={this.handleExperience}
              />
            </Col>
          </Row>
          <Row className="margin-20">
            <Col lg={6} md={6} sm={6} xs={12} className="padding-left-right-0">
              <div className="font24">
                <FormattedMessage
                  id="post.jobemail"
                  defaultMessage="Email"
                />
              </div>
              <input
                type="text"
                value={email ? email : ''}
                className="form-control padding-top-bottom-20"
                onChange={this.handleEmail}
              />
            </Col>
            <Col lg={6} md={6} sm={6} xs={12} className="padding-left-right-0">
              <div className="font24">
                <FormattedMessage
                  id="post.jobphonenumber"
                  defaultMessage="Phone Number"
                />
              </div>
              <input
                type="number"
                value={phoneNumber ? phoneNumber : ''}
                onBlur={this.handlePhoneNumberValidation}
                className="form-control padding-top-bottom-20"
                className={this.state.phoneNumberValid
                  ?
                  'full-width form-control padding-top-bottom-20'
                  :
                  'full-width form-control padding-top-bottom-20 border-red'
                }
                onChange={this.handlePhoneNumber}
              />
              <div className="margin-bottom-20 red">
                {this.state.phoneNumberValid ? null : 'Please Enter a valid phone number'}
              </div>
            </Col>
          </Row>
          <div className="margin-top-bottom-20 text-align-center">
            <button
              onClick={this.handlePostJob}
              disabled={!this.state.phoneNumberValid}
              className={this.state.phoneNumberValid
                ?
                'submit-button-style font20 font-bold half-width'
                :
                'disble-button-style font20 font-bold half-width'
              }
            >
              <FormattedMessage
                id="post.job.button"
                defaultMessage="POST JOB"
              />
            </button>
          </div>
        </div>
        {/* :
          <div>
            <Error />
          </div> */}
        {/* } */}
      </div>
    );
  }
}
PostAJob.propTypes = {
  onChangeOfContactPersonName: PropTypes.func,
  onChangeOfCompanyName: PropTypes.func,
  onChangeOfJobTitle: PropTypes.func,
  onChangeOfVacancy: PropTypes.func,
  onChangeOfJobDescription: PropTypes.func,
  onChangeOfMinSalary: PropTypes.func,
  onChangeOfMaxSalary: PropTypes.func,
  onChangeOfCity: PropTypes.func,
  onChangeOfLocality: PropTypes.func,
  onChangeOfExperience: PropTypes.func,
  onChangeOfEmail: PropTypes.func,
  onChangeOfPhoneNumber: PropTypes.func,
  postAJobRequest: PropTypes.func,
  postAJob: PropTypes.object,
  login: PropTypes.object,
}
PostAJob.defaultProps = {
  onChangeOfContactPersonName: () => { },
  onChangeOfCompanyName: () => { },
  onChangeOfJobTitle: () => { },
  onChangeOfVacancy: () => { },
  onChangeOfJobDescription: () => { },
  onChangeOfMinSalary: () => { },
  onChangeOfMaxSalary: () => { },
  onChangeOfCity: () => { },
  onChangeOfLocality: () => { },
  onChangeOfExperience: () => { },
  onChangeOfEmail: () => { },
  onChangeOfPhoneNumber: () => { },
  postAJobRequest: () => { },
  postAJob: {},
  login: {},
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostAJob));
