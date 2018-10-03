const FIRST_NAME = '@register/FIRST_NAME';
const LAST_NAME = '@register/LAST_NAME';
const PHONE_NUMBER = '@register/PHONE_NUMBER';
const PASSWORD = '@register/PASSWORD';
const USER_TYPE = '@register/USER_TYPE';
const REGISTER_USER_REQUEST = '@register/REGISTER_USER_REQUEST';
const REGISTER_USER_SUCCESS = '@register/REGISTER_USER_SUCCESS';
const REGISTER_USER_FAILURE = '@register/REGISTER_USER_FAILURE';

const initialState = {
  register: {
    firstName: null,
    lastName: null,
    phoneNumber: null,
    userType: 'seeker',
    password: null,
    loading: false,
    loaded: false,
    failed: false,
    registerResponse: null,
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FIRST_NAME:
      return {
        ...state,
        register: {
          ...state.register,
          firstName: action.result,
        }
      };
    case LAST_NAME:
      return {
        ...state,
        register: {
          ...state.register,
          lastName: action.result,
        }
      }
    case PHONE_NUMBER:
      return {
        ...state,
        register: {
          ...state.register,
          phoneNumber: action.result,
        }
      };
    case USER_TYPE:
      return {
        ...state,
        register: {
          ...state.register,
          userType: action.result,
        }
      }
    case PASSWORD:
      return {
        ...state,
        register: {
          ...state.register,
          password: action.result,
        }
      };
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false,
      }
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        failed: false,
        registerResponse: action.result,
      }
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        failed: true,
        registerResponse: action.error,
      }
    default:
      return state;
  }
}
export function onChangeOfUserType(value) {
  return {
    type: USER_TYPE,
    result: value,
  }
}
export function onChangeOfRegFName(value) {
  return {
    type: FIRST_NAME,
    result: value,
  };
}
export function onChangeOfRegLName(value) {
  return {
    type: LAST_NAME,
    result: value,
  };
}
export function onChangeOfRegPhoneNumber(value) {
  return {
    type: PHONE_NUMBER,
    result: value,
  };
}
export function onChangeOfPassword(value) {
  return {
    type: PASSWORD,
    result: value,
  }
}
export function registerNewUser(value) {
  const data = {
    firstName: value.firstName,
    lastName: value.lastName,
    username: value.phoneNumber,
    userType: value.userType,
    password: value.password
  }
  return {
    types: [REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE],
    promise: (client) => client.post('/api/register', { data })
  }
}
