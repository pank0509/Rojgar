import React from 'react';
// import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmployeeDetail } from '../Redux/modules/employeeCard';
function mapStateToProps(state) {
  return {
    getEmployee: state.getEmployee,
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployeeDetail: () => dispatch(getEmployeeDetail())
  }
}
class EmployeeCard extends React.Component {
  componentDidMount() {
    this.props.getEmployeeDetail();
  }
  render() {
    const dataArray = this.props.getEmployee.employeeDetailResponse && this.props.getEmployee.employeeDetailResponse.item.length > 0 ? this.props.getEmployee.employeeDetailResponse.item : [];
    console.log('this props in employee', dataArray);
    return (
      <div className="margin-top-100">
        {dataArray.map(keys => (
          <div className="card-style padding-20 margin-20 display-flex" key={keys._id}>
            <div>
              <img src="http://placekitten.com/g/400/200" className="img-circle" alt="" height="100" width="100" />
              <div>
                {`${keys.firstName.toUpperCase()} ${keys.lastName.toUpperCase()}`}
              </div>
            </div>
            <div>
              <div>
                {keys.gender}
              </div>
              <div>
                Expected Salary
            </div>
              <div>
                Experince in year
            </div>
            </div>
          </div>
        ))
        }
      </div>
    );
  }
}
EmployeeCard.propTypes = {
  getEmployee: PropTypes.object,
  getEmployeeDetail: PropTypes.func,
}
EmployeeCard.defaultProps = {
  getEmployee: {},
  getEmployeeDetail: () => { },
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCard);
