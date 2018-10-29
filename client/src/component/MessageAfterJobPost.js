import React from 'react';
import { withRouter } from 'react-router'
import { FormattedMessage } from 'react-intl';

class MessageAfterJobPost extends React.Component {

  handleClick = () => {
    this.props.history.push('/PostAJob');
  }
  render() {
    return (
      <div className="margin-top-100">
        <div className="card-style padding-20 margin-20">
          <div className="text-align-center">
            <img src={`${process.env.PUBLIC_URL}/svgIcons/checked.svg`} width="50%" height="auto" alt="" />
          </div>
          <h1 className="text-align-center margin-top-bottom-30">
            <FormattedMessage
              id="info.submit.message"
              defaultMessage="Thanks for sharing your details with us, our team will get in touch with you as soon as possible."
            />
          </h1>
          <div className="text-align-center">
            <button
              onClick={this.handleClick}
              className="text-align-center font20 font-bold orange-button-style padding-left-right-10"
            >
              <FormattedMessage
                id="redirect.afterjobpost.button"
                defaultMessage="Post Another Job"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MessageAfterJobPost);
