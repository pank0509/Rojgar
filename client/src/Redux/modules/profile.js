import moment from 'moment';
const GET_USER_DATA_REQUEST = '@profile/GET_USER_DATA_REQUEST';
const GET_USER_DATA_SUCCESS = '@profile/GET_USER_DATA_SUCCESS';
const GET_USER_DATA_FAILURE = '@profile/GET_USER_DATA_FAILURE';
const USER_FIRST_NAME = '@profile/USER_FIRST_NAME';
const USER_LAST_NAME = '@profile/USER_LAST_NAME';
const GENDER = '@profile/GENDER';
const DATE = '@profile/DATE';
const EMAIL = '@profile/EMAIL';
const PHONE_NUMBER = '@profile/PHONE_NUMBER';
const ALTERNATE_PHONE_NUMBER = '@profile/ALTERNATE_PHONE_NUMBER';
const ADDRESS = '@profile/ADDRESS';
const GRADE = '@profile/GRADE';
const SCHOOL_OR_UNIVERSITY = '@profile/SCHOOL_OR_UNIVERSIITY';
const EDUCATION_QUALIFICATION = '@profile/EDUCATION_QUALIFICATION';
const FIELD_OF_STUDY = '@profile/FIELD_OF_STUDY';
const TYPE_OF_JOB = '@profile/TYPE_OF_JOB';
const EXPERIENCE = '@profile/EXPERINCE';
const AVERAGE_SALARY = '@profile/AVERAGE_SALARY';
const POST_USER_DETAIL_REQUEST = '@profile/POST_USER_DETAIL_REQUEST';
const POST_USER_DETAIL_SUCCESS = '@profile/POST_USER_DETAIL_SUCCESS';
const POST_USER_DETAIL_FAILURE = '@profile/POST_USER_DETAIL_FAILURE';

const initialState = {
  loading: false,
  loaded: false,
  failure: false,
  personalDetails: {
    userFirstName: null,
    userLastName: null,
    gender: 'male',
    date: null,
    email: null,
    phoneNumber: null,
    alternatePhoneNumber: null,
    address: null,
  },
  personalDetailPost: {
    loading: false,
    loaded: false,
    failure: false,
    postResponse: null,
  },
  academicDetails: {
    grade: null,
    school: null,
    education: null,
    field: null,
  },
  jobDetails: {
    typeOfJob: null,
    experience: null,
    avgSalary: null,
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        failure: false,
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        failure: false,
        personalDetails: {
          ...state.personalDetails,
          userFirstName: action.result.firstName,
          userLastName: action.result.lastName,
          gender: action.result.gender,
          date: action.result.data,
          email: action.result.email,
          phoneNumber: action.result.phoneNumber,
          alternatePhoneNumber: action.result.alternatePhoneNumber,
          address: action.result.address,
        },
        academicDetails: {
          ...state.academicDetails,
          grade: action.result.grade,
          school: action.result.school,
          education: action.result.education,
          field: action.result.field
        },
        jobDetails: {
          ...state.jobDetails,
          experience: action.result.experience,
          avgSalary: action.result.avgSalary,
          typeOfJob: action.result.typeOfJob
        }
      };
    case GET_USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        failure: true,
      };
    case USER_FIRST_NAME:
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          userFirstName: action.result,
        }
      };
    case USER_LAST_NAME:
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          userLastName: action.result,
        }
      };
    case GENDER:
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          gender: action.result,
        }
      };
    case DATE:
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          date: action.result,
        }
      };
    case EMAIL:
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          email: action.result,
        }
      };
    case PHONE_NUMBER:
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          phoneNumber: action.result,
        }
      };
    case ALTERNATE_PHONE_NUMBER:
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          alternatePhoneNumber: action.result,
        }
      };
    case ADDRESS:
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          address: action.result,
        }
      };
    case POST_USER_DETAIL_REQUEST:
      return {
        ...state,
        personalDetailPost: {
          ...state.personalDetailPost,
          loading: true,
          loaded: false,
          failure: false,
        }
      };
    case POST_USER_DETAIL_SUCCESS:
      return {
        ...state,
        personalDetailPost: {
          ...state.personalDetailPost,
          loading: false,
          loaded: true,
          failure: false,
          postResponse: action.result,
        }
      };
    case POST_USER_DETAIL_FAILURE:
      return {
        ...state,
        personalDetailPost: {
          ...state.personalDetailPost,
          loading: false,
          loaded: false,
          failure: true,
          postResponse: action.error,
        }
      };
    case GRADE:
      return {
        ...state,
        academicDetails: {
          ...state.academicDetails,
          grade: action.result,
        }
      };
    case SCHOOL_OR_UNIVERSITY:
      return {
        ...state,
        academicDetails: {
          ...state.academicDetails,
          school: action.result,
        }
      };
    case EDUCATION_QUALIFICATION:
      return {
        ...state,
        academicDetails: {
          ...state.academicDetails,
          education: action.result,
        }
      };
    case FIELD_OF_STUDY:
      return {
        ...state,
        academicDetails: {
          ...state.academicDetails,
          field: action.result,
        }
      };
    case TYPE_OF_JOB:
      return {
        ...state,
        jobDetails: {
          ...state.jobDetails,
          typeOfJob: action.result,
        }
      };
    case EXPERIENCE:
      return {
        ...state,
        jobDetails: {
          ...state.jobDetails,
          experience: action.result,
        }
      }
    case AVERAGE_SALARY:
      return {
        ...state,
        jobDetails: {
          ...state.jobDetails,
          avgSalary: action.result,
        }
      }
    default:
      return state;
  }
}
export function onChangeOfUserFName(value) {
  return {
    type: USER_FIRST_NAME,
    result: value,
  };
}
export function onChangeOfUserLName(value) {
  return {
    type: USER_LAST_NAME,
    result: value,
  };
}
export function onChangeOfUserGender(value) {
  return {
    type: GENDER,
    result: value,
  };
}
export function onChangeOfUserDate(value) {
  return {
    type: DATE,
    result: value,
  };
}
export function onChangeOfUserEmail(value) {
  return {
    type: EMAIL,
    result: value,
  };
}
export function onChangeOfUserPhoneNumber(value) {
  return {
    type: PHONE_NUMBER,
    result: value,
  };
}
export function onChangeOfAlternateNumber(value) {
  return {
    type: ALTERNATE_PHONE_NUMBER,
    result: value,
  };
}
export function onChangeOfUserAddress(value) {
  return {
    type: ADDRESS,
    result: value,
  };
}
export function onChangeOfGrade(value) {
  return {
    type: GRADE,
    result: value,
  };
}
export function onChangeOfEducationQualification(value) {
  return {
    type: EDUCATION_QUALIFICATION,
    result: value,
  };
}
export function onChangeFieldOfStudy(value) {
  return {
    type: FIELD_OF_STUDY,
    result: value,
  };
}
export function onChangeSchool(value) {
  return {
    type: SCHOOL_OR_UNIVERSITY,
    result: value,
  };
}
export function onChangeOfJobType(value) {
  return {
    type: TYPE_OF_JOB,
    result: value,
  };
}
export function onChangeOfExperience(value) {
  return {
    type: EXPERIENCE,
    result: value,
  };
}
export function onChangeOfAvgSalary(value) {
  return {
    type: AVERAGE_SALARY,
    result: value,
  };
}
export function getPreFillInfo(value) {
  const data = {
    firstName: 'john',
    lastName: 'cena',
    username: '7890'
  };
  console.log('this is data in get preFilled info action', data);
  return {
    types: [GET_USER_DATA_REQUEST, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILURE],
    promise: (client) => client.post('/api/getuser/profile', { data })
  };
}
export function handleSubmit(value) {
  console.log(value);
  const currentData = moment().format('YYYY-MM-DD');
  const selectedDate = !!value.date ? value.date.format('YYYY-MM-DD') : currentData;
  const data = {
    firstName: value.userFirstName,
    lastName: value.userLastName,
    gender: value.gender,
    dateOfBirth: selectedDate,
    email: value.email,
    phoneNumber: value.phoneNumber,
    alternatePhoneNumber: value.alternatePhoneNumber,
    address: value.address,
    grade: value.grade,
    school: value.school,
    education: value.education,
    field: value.field,
    typeOfJob: value.typeOfJob,
    experience: value.experience,
    avgSalary: value.avgSalary,
  };
  return {
    types: [POST_USER_DETAIL_REQUEST, POST_USER_DETAIL_SUCCESS, POST_USER_DETAIL_FAILURE],
    promise: (client) => client.post('/api/prof/', { data })
  };
}
