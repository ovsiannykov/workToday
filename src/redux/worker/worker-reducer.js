import { workerTypes } from "./worker-types";

const initialState = {
  vanacies: null,
  vacancy: null,
};
export const workerReducer = (state = initialState, action) => {
  switch (action.type) {
    case workerTypes.SET_VACANCIES:
      return { ...state, vacancies: action.data };
    case workerTypes.SET_VACANCY:
      return { ...state, vacancy: action.vacancy };
    case workerTypes.SET_SELECT_VACANCY:
      return { ...state, vacancy: action.vacancy };
    default:
      return state;
  }
};
