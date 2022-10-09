import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import { getPreFillInfo } from '../Redux/modules/profile';
import { FormattedMessage } from 'react-intl';
import './FindJob.css';

function mapStateToProps(state) {
    return {
        profile: state.profile,
        login: state.login,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getPreFillInfo: (value) => dispatch(getPreFillInfo(value)),
    }
}
class Home extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (this.props.login.loginResponse !== nextProps.login.loginResponse) {
            this.props.getPreFillInfo(nextProps.login.loginResponse);
        }
    }
    handleJobProviderButton = () => {
        this.props.history.push('/postjob');
    }
    handleJobSeekerButton = () => {
        const { userFirstName, userLastName, phoneNumber } = this.props.profile.personalDetails;
        if (userFirstName && userLastName && phoneNumber) {
            this.props.history.push('/job');
        } else {
            this.props.history.push('/profile');
        }
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            dotsClass: 'slick-dots',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                    },
                },
            ],
        };
        return (
            <div className="margin-top-100">
                <div className="margin-top-100">
                    <Slider {...settings}>
                        <div className="padding-10">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/image1.jpg`}
                                className="full-width border-curved5 slider-image-border"
                                alt=""
                            />
                        </div>
                        <div className="padding-10">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/image2.jpg`}
                                className="full-width border-curved5 slider-image-border"
                                alt="Hi I am ankit kumar"
                            />
                        </div>
                        <div className="padding-10">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/image3.jpg`}
                                className="full-width border-curved5 slider-image-border"
                                alt=""
                            />
                        </div>
                        <div className="padding-10">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/image4.jpg`}
                                className="full-width border-curved5 slider-image-border"
                                alt=""
                            />
                        </div>
                        <div className="padding-10">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/image5.jpg`}
                                className="full-width border-curved5 slider-image-border"
                                alt=""
                            />
                        </div>
                    </Slider>
                </div>
                <div className="margin-top-60">
                    <div className="text-align-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
                            className="img-circle" height="100"
                            width="100" alt=""
                        />
                    </div>
                    <div className="text-align-center margin-top-20 font26 text-underline">
                        <FormattedMessage
                            id="home.mission"
                            defaultMessage="MISSION TITLE"
                        />
                    </div>
                    <div className="margin-left-right-lg-25-xs-2 margin-top-10 font22 text-align-center">
                        <FormattedMessage
                            id="mission"
                            defaultMessage="MISSION"
                        />
                    </div>
                    <div className="text-align-center margin-top-20 font26 text-underline">
                        <FormattedMessage
                            id="home.vision"
                            defaultMessage="VISION TITLE"
                        />
                    </div>
                    <div className="margin-left-right-lg-25-xs-2 margin-top-10 font22 text-align-center">
                        <FormattedMessage
                            id="vision"
                            defaultMessage="VISION"
                        />
                    </div>
                </div>
                <Row className="margin-top-100 margin-bottom-40">
                    <Col lg={6} md={6} sm={6} xs={6} className="text-align-xs-center font16">
                        <button
                            className="border-none padding-15 font-bold border-curved5 white"
                            style={{
                                backgroundColor: "#fb833e",
                            }}
                            onClick={this.handleJobSeekerButton}
                        >
                            <FormattedMessage
                                id="home.jobprovider.buttton"
                                defaultMessage="JOB SEEKER"
                            />
                        </button>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="text-align-lg-right-xs-center font16">
                        <button
                            onClick={this.handleJobProviderButton}
                            className="border-none padding-15 font-bold border-curved5 white"
                            style={{
                                backgroundColor: "#fb833e",
                            }}
                        >
                            <FormattedMessage
                                id="home.jobprovider.buttton"
                                defaultMessage="JOB PROVIDER"
                            />
                        </button>
                    </Col>
                </Row>
            </div>
        );
    }
}
Home.propTypes = {
    login: PropTypes.object,
    profile: PropTypes.object
}
Home.defaultProps = {
    login: {},
    profile: {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
