const CONTACT_PERSON_NAME = '@jobpost/CONTACT_PERSON_NAME';
const COMPANY_NAME = '@jobpost/COMPANY_NAME';
const JOB_TITLE = '@jobpost/JOB_TITLE';
const NUMBER_OF_VACANCY = '@jobpost/NUMBER_OF_VACANCY';
const JOB_DESCRIPTION = '@jobpost/JOB_DESCRIPTION';
const MIN_SALARY = '@jobpost/MIN_SALARY';
const MAX_SALARY = '@jobpost/MAX_SALARY';
const CITY = '@jobpost/CITY';
const LOCALITY = '@jobpost/LOCALITY';
const EXPERIENCE = '@jobpost/EXPERIENCE';
const EMAIL = '@jobpost/EMAIL';
const PHONE_NUMBER = '@jobpost/PHONE_NUMBER';
const POST_JOB_REQUEST = '@jobpost/POST_JOB_REQUEST';
const POST_JOB_SUCCESS = '@jobpost/POST_JOB_SUCCESS';
const POST_JOB_FAILURE = '@jobpost/POST_JOB_FAILURE';

const initialState = {
  contactPersonName: null,
  companyName: null,
  jobTitle: null,
  vacancy: null,
  jobDescription: null,
  minSalary: null,
  maxSalary: null,
  city: null,
  locality: null,
  experience: null,
  email: null,
  phoneNumber: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CONTACT_PERSON_NAME:
      return {
        ...state,
        contactPersonName: action.result,
      };
    case COMPANY_NAME:
      return {
        ...state,
        companyName: action.result,
      };
    case JOB_TITLE:
      return {
        ...state,
        jobTitle: action.result,
      };
    case NUMBER_OF_VACANCY:
      return {
        ...state,
        vacancy: action.result,
      }
    case JOB_DESCRIPTION:
      return {
        ...state,
        jobDescription: action.result,
      };
    case MIN_SALARY:
      return {
        ...state,
        minSalary: action.result,
      };
    case MAX_SALARY:
      return {
        ...state,
        maxSalary: action.result,
      };
    case CITY:
      return {
        ...state,
        city: action.result,
      };
    case LOCALITY:
      return {
        ...state,
        locality: action.result,
      };
    case EXPERIENCE:
      return {
        ...state,
        experience: action.result,
      };
    case EMAIL:
      return {
        ...state,
        email: action.result,
      };
    case PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.result,
      };
    default:
      return state;
  }
}
export function onChangeOfContactPersonName(value) {
  return {
    type: CONTACT_PERSON_NAME,
    result: value,
  };
}
export function onChangeOfCompanyName(value) {
  return {
    type: COMPANY_NAME,
    result: value,
  };
}
export function onChangeOfJobTitle(value) {
  return {
    type: JOB_TITLE,
    result: value,
  };
}
export function onChangeOfVacancy(value) {
  return {
    type: NUMBER_OF_VACANCY,
    result: value,
  };
}
export function onChangeOfJobDescription(value) {
  return {
    type: JOB_DESCRIPTION,
    result: value,
  };
}
export function onChangeOfMinSalary(value) {
  return {
    type: MIN_SALARY,
    result: value,
  };
}
export function onChangeOfMaxSalary(value) {
  return {
    type: MAX_SALARY,
    result: value,
  };
}
export function onChangeOfCity(value) {
  return {
    type: CITY,
    result: value,
  };
}
export function onChangeOfLocality(value) {
  return {
    type: LOCALITY,
    result: value,
  };
}
export function onChangeOfExperience(value) {
  return {
    type: EXPERIENCE,
    result: value,
  };
}
export function onChangeOfEmail(value) {
  return {
    type: EMAIL,
    result: value,
  };
}
export function onChangeOfPhoneNumber(value) {
  return {
    type: PHONE_NUMBER,
    result: value,
  };
}
export function postAJobRequest(value) {
  console.log(value);
  const data = {
    firstName: value.firstName,
    lastName: value.lastName,
    contactPersonName: value.contactPersonName,
    companyName: value.companyName,
    jobTitle: value.jobTitle,
    vacancy: value.vacancy,
    jobDescription: value.jobDescription,
    minSalary: value.minSalary,
    maxSalary: value.maxSalary,
    city: value.city,
    locality: value.locality,
    experience: value.experience,
    email: value.email,
    phoneNumber: value.phoneNumber,
  }
  return {
    types: [POST_JOB_REQUEST, POST_JOB_SUCCESS, POST_JOB_FAILURE],
    promise: (client) => client.post('/api/jobpost', { data })
  }
}
