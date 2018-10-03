const GET_JOB_REQUEST = '@job/GET_JOB_REQUEST';
const GET_JOB_SUCCESS = '@job/GET_JOB_SUCCESS';
const GET_JOB_FAILURE = '@job/GET_JOB_FAILURE';
const APPLY_JOB_REQUEST = '@job/APPLY_JOB_REQUEST';
const APPLY_JOB_SUCCESS = '@job/APPLY_JOB_SUCCESS';
const APPLY_JOB_FAILURE = '@job/APPLY_JOB_FAILURE';

const initialState = {
  loading: false,
  loaded: false,
  failed: false,
  jobDetail: null,
  appliedResponse: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_JOB_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false,
        jobDetail: null,
      };
    case GET_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        failed: false,
        jobDetail: action.result,
      };
    case GET_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: true,
        failed: false,
        jobDetail: action.error,
      };
    case APPLY_JOB_REQUEST:
      return {
        ...state,
      }
    case APPLY_JOB_SUCCESS:
      return {
        ...state,
        appliedResponse: action.result,
      }
    case APPLY_JOB_FAILURE:
      return {
        ...state,
        appliedResponse: action.error,
      }
    default:
      return state;
  }
}

export function getAllTheJob() {
  return {
    types: [GET_JOB_REQUEST, GET_JOB_SUCCESS, GET_JOB_FAILURE],
    promise: (client) => client.get('/api/getjob')
  };
}
export function applyForTheJob(value) {
  console.log('value', value);
  const data = {
    seekerId: value.uaid,
    providerId: value.providerId,
    value
  }
  console.log('data', data);
  return {
    types: [APPLY_JOB_REQUEST, APPLY_JOB_SUCCESS, APPLY_JOB_FAILURE],
    promise: (client) => client.post('/api/applied', { data })
  };
}
