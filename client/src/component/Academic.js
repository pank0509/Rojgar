import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import $ from "jquery";
import { FormattedMessage } from 'react-intl';


class Academic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addIconClicked: false,
    }
  }
  handleIconClicked = () => {
    $('#academicPanel').slideToggle(1000);
    this.setState({
      addIconClicked: !this.state.addIconClicked,
    });
  }
  handleEductionalQualificationSelect = (event) => {
    this.props.onChangeOfEducationQualification(event.target.value);
  }
  handleFieldOfStudySelect = (event) => {
    this.props.onChangeFieldOfStudy(event.target.value);
  }
  handleSchoolSelect = (event) => {
    this.props.onChangeSchool(event.target.value);
  }
  handleUserGrade = (event) => {
    this.props.onChangeOfGrade(event.target.value);
  };
  render() {
    const { grade, school, education, field } = this.props.academicDetails;
    return (
      <div className="padding-top-bottom-10 margin-top-bottom-20 background-color-white">
        <div className="display-flex-align-item-center" onClick={this.handleIconClicked}>
          <div className="margin-left-20 width-35">
            {this.state.addIconClicked ?
              <img src={`${process.env.PUBLIC_URL}/svgIcons/error.svg`} width="100%" height="auto" alt="" /> :
              <img src={`${process.env.PUBLIC_URL}/svgIcons/checked.svg`} width="100%" height="auto" alt="" />
            }
          </div>
          <div className="theme-font-color font-bold font18 margin-left-10">
            <FormattedMessage
              id="profile.academicheader"
              defaultMessage="ACADEMIC (OPTIONAL)"
            />
          </div>
        </div>
        <div id='academicPanel' className="margin-20">
          <div className="font16">
            <FormattedMessage
              id="profile.school/university"
              defaultMessage="School / University"
            />
          </div>
          <div className="margin-top-bottom-20">
            <input
              type="text"
              value={school}
              className="form-control"
              onChange={this.handleSchoolSelect}
            />
          </div>
          <div className="font16">
            <FormattedMessage
              id="profile.educationalQualification"
              defaultMessage="Height Education Qualification"
            />
          </div>
          <div className="margin-top-bottom-20">
            <input
              type="text"
              value={education}
              className="form-control"
              onChange={this.handleEductionalQualificationSelect}
            />
          </div>
          <div className="font16">
            <FormattedMessage
              id="profile.fieldofstudy"
              defaultMessage="Field of study"
            />
          </div>
          <div className="margin-top-bottom-20">
            <input
              type="text"
              className="form-control"
              value={field}
              onChange={this.handleFieldOfStudySelect}
            />
          </div>
          <div className="font16">
            <FormattedMessage
              id="profile.gradeandpercentage"
              defaultMessage="Grade / Percentage"
            />
          </div>
          <div className="margin-top-bottom-20">
            <input
              type="text"
              className="form-control"
              value={grade}
              onChange={this.handleUserGrade}
            />
          </div>
        </div>
      </div>
    )
  }
}
Academic.propTypes = {
  academicDetails: PropTypes.object,
  onChangeOfGrade: PropTypes.func,
  onChangeOfEducationQualification: PropTypes.func,
  onChangeFieldOfStudy: PropTypes.func,
  onChangeSchool: PropTypes.func,
  submitAcademicDetial: PropTypes.func,
};
Academic.defaultProps = {
  academicDetails: {},
  onChangeOfGrade: () => { },
  onChangeOfEducationQualification: () => { },
  onChangeFieldOfStudy: () => { },
  onChangeSchool: () => { },
  submitAcademicDetial: () => { }
};
export default Academic;