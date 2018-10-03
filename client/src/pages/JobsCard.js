import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './FindJob.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Modal } from 'react-bootstrap';
import { getAllTheJob, applyForTheJob } from '../Redux/modules/jobCard';
import { FacebookIcon, FacebookShareButton, WhatsappShareButton, WhatsappIcon } from 'react-share';
function mapStateToProps(state) {
  return {
    getJob: state.getJob,
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllTheJob: () => dispatch(getAllTheJob()),
    applyForTheJob: (value) => dispatch(applyForTheJob(value))
  }
}
class JobsCard extends React.Component {
  state = {
    shareJob: false,
  }
  componentDidMount() {
    this.props.getAllTheJob();
    document.cookie = this.props.login.loginResponse && this.props.login.loginResponse.uaid;
    console.log('cookie', document.cookie);
  }
  handleShareButton = () => {
    this.setState({
      shareJob: true,
    });
  }
  closeShareModel = () => {
    this.setState({
      shareJob: false,
    });
  }
  handleApplyButton = (id) => {
    const idObject = {
      providerId: id,
    }
    this.props.applyForTheJob(Object.assign({}, this.props.login.loginResponse, idObject));
  }
  render() {
    const facebookButton = <FacebookIcon size={32} round={true} />;
    const whatsappButton = <WhatsappIcon size={32} round={true} />;
    console.log('This is props in the job card page', this.props);
    const dataArray = this.props.getJob.jobDetail && this.props.getJob.jobDetail.item.length > 0 ? this.props.getJob.jobDetail.item : [];
    return (
      <div className="margin-top-80">
        <Modal
          show={this.state.shareJob}
          dialogClassName="custom-modal-width"
          aria-labelledby="contained-modal-title-sm"
        >
          <Modal.Header>
            <img onClick={this.closeShareModel} src={`${process.env.PUBLIC_URL}/svgIcons/close.png`} width="15" height="15" alt="" className="float-right" />
          </Modal.Header>
          <Modal.Body>
            <div className="display-flex-justify-content-space-between">
              <FacebookShareButton url="https://www.google.com" children={facebookButton} />
              <WhatsappShareButton url="https://www.google.com" children={whatsappButton} />
            </div>
          </Modal.Body>
        </Modal>
        {dataArray.map(keys => (
          <div className="card-style padding-20 margin-20" key={keys._id}>
            <Row>
              <Col lg={6} md={6} sm={6} xs={12} className="font26 bold text-align-xs-center">{keys.companyName}</Col>
              <Col lg={6} md={6} sm={6} xs={12} className="font22 font-bold text-align-lg-right-xs-center">{keys.jobTitle}</Col>
            </Row>
            <div className="display-flex-justify-content-space-between font18 margin-top-bottom-20">
              <div>{keys.minSalary}k - {keys.maxSalary}k</div>
              <div>{keys.city}</div>
              <div>{keys.experience} Year</div>
            </div>
            <div className="margin-top-bottom-20">
              <span className="font18 margin-top-bottom-20">Primary Requirement:</span>
              <ul className="font16 line-height-1-6">
                <li>{keys.jobDescription}</li>
              </ul>
              <span className="font18 margin-top-bottom-20">Good To Have:</span>
              <ul className="font16 line-height-1-6">
                <li>Know of Data model</li>
                <li>knowledge of git</li>
              </ul>
            </div>
            <div className="display-flex-justify-content-space-between">
              {this.props.getJob.appliedResponse ?
                <button
                  disabled
                  className="bg-gray border-none border-curved5 font-color-white padding-top-bottom-10 padding-left-right-20 font-bold font16"
                >
                  APPLIED
                </button>
                :
                <button
                  onClick={() => this.handleApplyButton(keys._id)}
                  disabled={!this.props.login.loginResponse}
                  className="theme-button-color border-none border-curved5 font-color-white padding-top-bottom-10 padding-left-right-20 font-bold font16"
                >
                  {this.props.login.loginResponse && this.props.login.loginResponse.uaid ?
                    <FormattedMessage
                      id="job.apply.button"
                      defaultMessage="APPLY"
                    />
                    :
                    <FormattedMessage
                      id="job.logintoapply.button"
                      defaultMessage="LOGIN TO APPLY"
                    />
                  }
                </button>
              }
              <img onClick={this.handleShareButton} src={`${process.env.PUBLIC_URL}/svgIcons/share.svg`} width="25" height="25" alt="" />
            </div>
          </div>
        ))
        }
      </div>
    )
  }
}
JobsCard.propTypes = {
  applyForTheJob: PropTypes.func,
  getJob: PropTypes.object,
  getAllTheJob: PropTypes.func,
  login: PropTypes.object,
}
JobsCard.defaultProps = {
  applyForTheJob: () => { },
  getJob: {},
  getAllTheJob: () => { },
  login: {},
}
export default connect(mapStateToProps, mapDispatchToProps)(JobsCard);
