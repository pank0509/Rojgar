import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import $ from "jquery";

class JobDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addIconClicked: false,
    }
  }
  handleIconClicked = () => {
    $('#jobDetailsPanel').slideToggle(1000);
    this.setState({
      addIconClicked: !this.state.addIconClicked,
    });
  }
  handleJobCategory = (event) => {
    this.props.onChangeOfJobType(event.target.value);
  };
  handleExperience = (event) => {
    this.props.onChangeOfExperience(event.target.value);
  };
  handleAvgSalaryChange = (event) => {
    this.props.onChangeOfAvgSalary(event.target.value);
  };
  render() {
    console.log('Job Detail', this.props.jobDetails);
    const { avgSalary, experience, typeOfJob } = this.props.jobDetails;
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
              id="profile.jobdetail"
              defaultMessage="JOB DETAIL"
            />
          </div>
        </div>
        <div id='jobDetailsPanel'>
          <div className="margin-20">
            <div className="font16">
              <FormattedMessage
                id="profile.jobtype"
                defaultMessage="What type of job you are looking for"
              />
            </div>
            <input
              type="text"
              className="form-control"
              value={typeOfJob}
              onChange={this.handleJobCategory}
            />
          </div>
          <div className="margin-20">
            <div className="font16">
              <FormattedMessage
                id="profile.experience"
                defaultMessage="Any Previous experience"
              />
            </div>
            <input
              type="text"
              value={experience}
              className="form-control"
              onChange={this.handleExperience}
            />
            <div className="margin-top-20">
              <div className="font16">
                <FormattedMessage
                  id="profile.expectedsalary"
                  defaultMessage="Avg Expected Salary"
                />
              </div>
              <input
                type="text"
                value={avgSalary}
                className="form-control"
                onChange={this.handleAvgSalaryChange}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
JobDetails.propTypes = {
  jobDetails: PropTypes.object,
  onChangeOfJobType: PropTypes.func,
  onChangeOfExperience: PropTypes.func,
  onChangeOfAvgSalary: PropTypes.func,
};
JobDetails.defaultProps = {
  jobDetails: {},
  onChangeOfJobType: () => { },
  onChangeOfExperience: () => { },
  onChangeOfAvgSalary: () => { },
};
export default JobDetails;