const CHANGE_LANGUAGE = '@language/CHANGE_LANGUAGE';

const initialState = {
  lang: 'hi'
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.result,
      };
    default:
      return state;
  }
}

export function onLanguageChange(value) {
  return {
    type: CHANGE_LANGUAGE,
    result: value
  };
}