import { combineReducers } from 'redux';
import profile from './profile';
import login from './login';
import register from './register';
import postAJob from './postAJob';
import getJob from './jobCard';
import getEmployee from './employeeCard';
import language from './language';

export default combineReducers({
  getJob,
  getEmployee,
  login,
  language,
  profile,
  postAJob,
  register,
});
