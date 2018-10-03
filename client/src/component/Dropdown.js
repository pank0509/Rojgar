import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
const defaultOption = [
  { value: '1year', label: '1 Year' },
  { value: '2year', label: '2 Year' },
  { value: '3year', label: '3 Year' },
  { value: '4year', label: '4 Year' }
]

class Dropdown extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }
  render() {
    const { selectedOption } = this.state;
    const { options, isMulti } = this.props;
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isClearable
        isMulti={isMulti}
      />
    );
  }
}
Dropdown.propTypes = {
  options: PropTypes.array,
  isMulti: PropTypes.bool,
}
Dropdown.defaultProps = {
  options: defaultOption,
  isMulti: true,
}
export default Dropdown;